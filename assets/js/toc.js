// 目录功能
document.addEventListener('DOMContentLoaded', function() {
    const mobileTocButton = document.getElementById('mobile-toc-button');
    const mobileToc = document.getElementById('mobile-toc');
    const mobileTocContainer = document.getElementById('mobile-toc-container');
    const closeToc = document.getElementById('close-toc');
    const desktopToc = document.getElementById('desktop-toc');
    
    // 检查是否有目录内容
    function hasTocContent() {
        const headings = document.querySelectorAll('.prose h1, .prose h2, .prose h3, .prose h4');
        return headings.length > 0;
    }
    
    // 如果有目录内容，显示目录相关元素
    if (hasTocContent()) {
        // 显示移动端目录按钮
        if (mobileTocButton) {
            mobileTocButton.classList.remove('hidden');
        }
        
        // 生成目录内容
        generateTableOfContents();
        
        if (mobileTocButton && mobileToc) {
            // 打开目录
            mobileTocButton.addEventListener('click', function() {
                mobileToc.classList.remove('hidden');
                // 使用动画效果显示目录
                setTimeout(() => {
                    mobileTocContainer.classList.remove('translate-y-full');
                }, 10);
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            });
            
            // 关闭目录
            closeToc.addEventListener('click', function() {
                closeTocMenu();
            });
            
            // 点击背景关闭目录
            mobileToc.addEventListener('click', function(e) {
                if (e.target === mobileToc) {
                    closeTocMenu();
                }
            });
        }
    } else {
        // 如果没有目录内容，隐藏目录相关元素
        if (desktopToc) {
            desktopToc.classList.add('hidden');
            desktopToc.classList.remove('md:block');
        }
        
        if (mobileTocButton) {
            mobileTocButton.classList.add('hidden');
        }
    }
});

// 关闭目录菜单
function closeTocMenu() {
    const mobileToc = document.getElementById('mobile-toc');
    const mobileTocContainer = document.getElementById('mobile-toc-container');
    
    mobileTocContainer.classList.add('translate-y-full');
    setTimeout(() => {
        mobileToc.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// 生成目录内容
function generateTableOfContents() {
    // 获取所有标题并转换为数组以便排序
    const headingsArray = Array.from(document.querySelectorAll('.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6'));
    
    if (headingsArray.length === 0) return;
    
    // 根据DOM位置排序
    const sortedHeadings = headingsArray.sort((a, b) => {
        const position = a.compareDocumentPosition(b);
        return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
    
    const tocContents = document.querySelectorAll('.toc-content');
    const toc = document.createElement('ul');
    toc.className = 'space-y-2 text-sm';
    
    // 创建标题ID到DOM元素的映射
    const headingMap = new Map();
    
    sortedHeadings.forEach((heading, index) => {
        // 为每个标题生成唯一ID
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        headingMap.set(heading.id, heading);
        
        const level = parseInt(heading.tagName.substring(1));
        const item = document.createElement('li');
        const link = document.createElement('a');
        
        // 设置链接文本和属性
        link.textContent = heading.textContent;
        link.href = `#${heading.id}`;
        link.setAttribute('data-heading-id', heading.id);
        link.setAttribute('data-level', level);
        link.className = `block py-1 transition-colors duration-200 text-gray-600 hover:text-gray-900`;
        
        // 设置缩进
        item.style.paddingLeft = `${(level - 1) * 12}px`;
        
        item.appendChild(link);
        toc.appendChild(item);
    });
    
    // 更新目录内容
    tocContents.forEach(tocContent => {
        if (tocContent) {
            tocContent.innerHTML = '';
            tocContent.appendChild(toc.cloneNode(true));
            
            // 为每个链接添加点击事件
            tocContent.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const headingId = link.getAttribute('data-heading-id');
                    handleTocClick(link, headingId);
                });
            });
        }
    });
    
    // 设置滚动监听
    setupScrollSpy(headingMap);
}

// 处理目录点击事件
function handleTocClick(link, targetId) {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const extraPadding = 24;
        
        // 只在桌面端时关闭目录
        if (window.innerWidth >= 768) {
            if (typeof closeTocMenu === 'function') {
                closeTocMenu();
            }
        }
        
        // 计算目标位置，考虑导航栏高度和额外边距
        const targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - navHeight - extraPadding;
        
        // 平滑滚动到目标位置
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // 更新活动标题
        updateActiveHeading(targetId);
    }
}

// 更新活动标题状态
function updateActiveHeading(headingId) {
    const tocLinks = document.querySelectorAll('.toc-content a');
    tocLinks.forEach(link => {
        const linkHeadingId = link.getAttribute('data-heading-id');
        if (linkHeadingId === headingId) {
            link.classList.add('text-gray-900', 'font-medium');
        } else {
            link.classList.remove('text-gray-900', 'font-medium');
        }
    });
    
    // 确保当前活动的目录项在视图中可见
    const activeLink = document.querySelector(`.desktop-toc-content a[data-heading-id="${headingId}"]`);
    if (activeLink) {
        const tocContainer = document.querySelector('#desktop-toc .sticky');
        if (tocContainer) {
            const containerRect = tocContainer.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            
            if (linkRect.top < containerRect.top || linkRect.bottom > containerRect.bottom) {
                activeLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    }
}

// 设置滚动监听
function setupScrollSpy(headingMap) {
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const navHeight = document.querySelector('nav').offsetHeight;
                const scrollPos = window.scrollY + navHeight + 24;
                
                let currentHeading = null;
                let minDistance = Infinity;
                
                for (const [id, heading] of headingMap) {
                    const rect = heading.getBoundingClientRect();
                    const absoluteTop = window.pageYOffset + rect.top;
                    const distance = Math.abs(absoluteTop - scrollPos);
                    
                    if (distance < minDistance) {
                        minDistance = distance;
                        currentHeading = id;
                    }
                }
                
                if (currentHeading) {
                    updateActiveHeading(currentHeading);
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // 初始化时执行一次
} 