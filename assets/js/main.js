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
});