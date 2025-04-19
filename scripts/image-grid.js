// scripts/image-grid.js
document.addEventListener('DOMContentLoaded', function() {
    // 查找所有图片容器
    document.querySelectorAll('.image-grid').forEach(container => {
      // 获取容器中的所有图片
      const images = container.querySelectorAll('img');
      
      // 如果没有找到图片，可能是因为Markdown渲染问题
      if (images.length === 0) {
        // 尝试查找容器内的文本节点并转换为图片
        const content = container.innerHTML;
        if (content.includes('![')) {
          // 清空容器
          container.innerHTML = '';
          
          // 解析Markdown格式的图片
          const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
          let match;
          while ((match = imgRegex.exec(content)) !== null) {
            const alt = match[1];
            const src = match[2];
            
            // 创建图片元素
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            container.appendChild(img);
          }
        }
      }
      
      // 重新获取图片
      const updatedImages = container.querySelectorAll('img');
      
      // 创建并排布局
      container.style.display = 'grid';
      container.style.gridTemplateColumns = `repeat(${updatedImages.length || 1}, 1fr)`;
      container.style.gap = '10px';
      container.style.margin = '20px 0';
      
      // 添加点击放大功能
      updatedImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '4px';
        
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