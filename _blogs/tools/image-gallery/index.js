class ImageGallery {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      maxImages: 3,
      defaultColumns: 2,
      ...options
    };
    this.init();
  }

  init() {
    // 创建基础布局
    this.createLayout();
    // 绑定事件
    this.bindEvents();
  }

  createLayout() {
    // 创建分栏容器
    this.galleryContainer = document.createElement('div');
    this.galleryContainer.className = 'image-gallery-container';
    
    // 创建默认的两个分栏
    for(let i = 0; i < this.options.defaultColumns; i++) {
      this.addColumn();
    }
    
    // 添加"添加分栏"按钮（如果小于最大数量）
    if(this.getColumns().length < this.options.maxImages) {
      this.addNewColumnButton();
    }
  }

  addColumn() {
    const column = document.createElement('div');
    column.className = 'gallery-column';
    
    // 添加拖拽区域
    const dropZone = document.createElement('div');
    dropZone.className = 'drop-zone';
    dropZone.innerHTML = '拖拽或点击添加图片';
    
    // 添加图片说明输入框
    const caption = document.createElement('input');
    caption.type = 'text';
    caption.className = 'image-caption';
    caption.placeholder = '添加图片说明...';   
    column.appendChild(dropZone);
    column.appendChild(caption);
    this.galleryContainer.appendChild(column);
  }

  bindEvents() {
    // 处理图片拖拽
    this.container.addEventListener('dragover', this.handleDragOver.bind(this));
    this.container.addEventListener('drop', this.handleDrop.bind(this));
    
    // 处理粘贴事件
    document.addEventListener('paste', this.handlePaste.bind(this));
    
    // 处理图片点击放大
    this.container.addEventListener('click', this.handleImageClick.bind(this));
  }
}
