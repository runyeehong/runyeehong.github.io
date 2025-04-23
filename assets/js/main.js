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

// 导航栏交互
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = () => window.innerWidth < 768;
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    // 移动端菜单切换
    mobileMenuButton?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 更新导航栏选中状态
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const isDesktop = !isMobile();
            
            // 移动端菜单点击后关闭
            if (!isDesktop && !this.classList.contains('nav-link-active')) {
                mobileMenu.classList.add('hidden');
            }

            // 更新选中状态
            document.querySelectorAll('nav a').forEach(el => {
                if (isDesktop) {
                    // 桌面端样式
                    el.classList.remove('nav-link-active');
                    el.classList.add('text-gray-600', 'hover:text-dark', 'pb-1', 'hover:border-b-2', 'hover:border-gray-300');
                } else {
                    // 移动端样式
                    el.classList.remove('nav-link-active');
                }
            });

            // 添加新的选中状态
            this.classList.add('nav-link-active');
            if (isDesktop) {
                this.classList.remove('text-gray-600', 'hover:text-dark', 'pb-1', 'hover:border-b-2', 'hover:border-gray-300');
            }
        });
    });

    // 处理窗口大小变化
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            mobileMenu.classList.add('hidden');
        }
    });
});