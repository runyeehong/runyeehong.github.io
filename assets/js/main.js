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
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // 点击移动端菜单项后自动关闭菜单
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // 只为桌面端导航添加选中态
    const desktopNav = document.querySelector('.hidden.md\\:flex');
    if (desktopNav) {
        desktopNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                desktopNav.querySelectorAll('a').forEach(el => {
                    el.classList.remove('nav-link-active');
                    el.classList.add('text-gray-600', 'hover:text-dark', 'pb-1', 'hover:border-b-2', 'hover:border-gray-300');
                });
                this.classList.add('nav-link-active');
                this.classList.remove('text-gray-600', 'hover:text-dark', 'pb-1', 'hover:border-b-2', 'hover:border-gray-300');
            });
        });
    }
});