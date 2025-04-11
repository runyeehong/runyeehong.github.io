// 使用Showdown库解析Markdown
const loadMarkdown = async () => {
    try {
        // 加载对应项目的Markdown文件
        const response = await fetch(`content.md`);
        if (!response.ok) throw new Error('Markdown文件加载失败');
        
        const markdown = await response.text();
        
        // 使用Showdown转换Markdown为HTML
        const converter = new showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
        const html = converter.makeHtml(markdown);
        
        // 插入到页面
        document.getElementById('markdown-content').innerHTML = html;
        
        // 添加Tailwind样式类
        addMarkdownStyles();
        
    } catch (error) {
        console.error(error);
        document.getElementById('markdown-content').innerHTML = `
            <div class="text-center py-8 text-red-500">
                <p>内容加载失败，请检查content.md文件是否存在</p>
                <p class="text-sm">错误详情: ${error.message}</p>
                <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-primary text-white rounded">
                    重新加载
                </button>
            </div>
        `;
    }
};

// 添加Markdown样式类
const addMarkdownStyles = () => {
    const contentDiv = document.getElementById('markdown-content');
    
    // 标题样式
    contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        heading.classList.add('font-bold', 'text-dark', 'my-4');
        if (heading.tagName === 'H1') heading.classList.add('text-3xl');
        if (heading.tagName === 'H2') heading.classList.add('text-2xl');
        // 其他标题大小...
    });
    
    // 其他元素样式...
};

// 加载Showdown库并执行
const loadShowdown = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js';
    script.onload = loadMarkdown;
    document.head.appendChild(script);
};

// 设置当前年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 初始化
document.addEventListener('DOMContentLoaded', loadShowdown);