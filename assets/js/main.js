// Tailwind配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#1E40AF',
                dark: '#1F2937',
                light: '#F3F4F6'
            },
            fontFamily: {
                sans: ['Inter', 'Microsoft YaHei', 'sans-serif'],
            }
        }
    }
}

// 导航栏交互 - 使用老版本的交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 更新导航栏选中状态
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('nav a').forEach(el => {
                el.classList.remove('nav-link-active');
                el.classList.add('text-gray-600', 'hover:text-dark', 'pb-1', 'hover:border-b-2', 'hover:border-gray-300');
            });
            this.classList.add('nav-link-active');
            this.classList.remove('text-gray-600', 'hover:text-dark', 'pb-1', 'hover:border-b-2', 'hover:border-gray-300');
        });
    });
    
    // 移动端菜单交互
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // 点击菜单项后自动关闭菜单
        const mobileMenuItems = mobileMenu.querySelectorAll('a');
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // 移除任何可能的焦点效果
                this.blur();
                // 立即隐藏菜单
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // 版本标记使用手动更新的方式
    // 如需更新版本号，请直接修改HTML中的版本号文本
    const versionMarker = document.getElementById('version-marker');
    if (versionMarker) {
        versionMarker.title = "版本号 - 手动更新";
    }
});