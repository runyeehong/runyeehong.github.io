// scripts/image-grid.js
document.addEventListener('DOMContentLoaded', function() {
    // 查找所有图片容器
    document.querySelectorAll('.image-grid').forEach(container => {
      const images = container.querySelectorAll('img');
      
      // 创建并排布局
      container.style.display = 'grid';
      container.style.gridTemplateColumns = `repeat(${images.length}, 1fr)`;
      container.style.gap = '10px';
      container.style.margin = '20px 0';
      
      // 添加点击放大功能
      images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = () => {
          const overlay = document.createElement('div');
          overlay.style = `
            position: fixed; 
            top:0; left:0; 
            width:100vw; 
            height:100vh; 
            background:rgba(0,0,0,0.8); 
            display:flex; 
            justify-content:center; 
            align-items:center; 
            z-index:1000;
            cursor:zoom-out;
          `;
          overlay.innerHTML = `<img src="${img.src}" style="max-height:90vh; max-width:90vw;">`;
          overlay.onclick = () => document.body.removeChild(overlay);
          document.body.appendChild(overlay);
        };
      });
    });
  });