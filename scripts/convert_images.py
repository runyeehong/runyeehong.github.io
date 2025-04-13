import os
import re
import base64
import glob
from pathlib import Path
import sys

# 添加调试信息
print(f"Python 版本: {sys.version}")
print(f"当前工作目录: {os.getcwd()}")

# 博客和项目目录
blog_dir = '/Users/runza/Documents/GitHub/runyeehong.github.io/_blogs'
project_dir = '/Users/runza/Documents/GitHub/runyeehong.github.io/_projects'

# 检查目录是否存在
print(f"检查博客目录: {os.path.exists(blog_dir)}")
print(f"检查项目目录: {os.path.exists(project_dir)}")

def extract_and_save_images(md_file_path):
    """提取 Markdown 文件中的 base64 图片并保存为文件"""
    
    print(f"处理文件: {md_file_path}")
    
    # 检查文件是否存在
    if not os.path.exists(md_file_path):
        print(f"文件不存在: {md_file_path}")
        return
    
    # 读取 Markdown 文件内容
    try:
        with open(md_file_path, 'r', encoding='utf-8') as file:
            content = file.read()
    except Exception as e:
        print(f"读取文件出错: {md_file_path}, 错误: {e}")
        return
    
    # 创建图片目录
    article_dir = os.path.dirname(md_file_path)
    img_dir = os.path.join(article_dir, 'images')
    try:
        os.makedirs(img_dir, exist_ok=True)
        print(f"创建/确认图片目录: {img_dir}")
    except Exception as e:
        print(f"创建图片目录出错: {img_dir}, 错误: {e}")
        return
    
    # 查找所有 base64 图片
    pattern = r'!\[(.*?)\]\((data:image\/(\w+);base64,([^)]+))\)'
    matches = re.findall(pattern, content)
    print(f"找到 {len(matches)} 个 base64 图片")
    
    # 替换每个匹配项
    new_content = content
    for i, match in enumerate(matches):
        alt_text, full_data_url, img_type, base64_data = match
        
        # 生成图片文件名
        img_filename = f'image_{i+1}.{img_type}'
        img_path = os.path.join(img_dir, img_filename)
        
        # 保存图片文件
        try:
            img_data = base64.b64decode(base64_data)
            with open(img_path, 'wb') as img_file:
                img_file.write(img_data)
            
            # 更新 Markdown 中的链接
            relative_path = f'images/{img_filename}'
            new_link = f'![{alt_text}]({relative_path})'
            new_content = new_content.replace(f'![{alt_text}]({full_data_url})', new_link)
            
            print(f'已保存图片: {img_path}')
        except Exception as e:
            print(f'处理图片时出错: {e}')
    
    # 保存更新后的 Markdown 文件
    if new_content != content:
        try:
            with open(md_file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'已更新文件: {md_file_path}')
        except Exception as e:
            print(f'保存文件出错: {md_file_path}, 错误: {e}')
    else:
        print(f'文件无需更新: {md_file_path}')

def process_all_markdown_files():
    """处理所有 Markdown 文件"""
    # 处理博客文章
    blog_files = glob.glob(f'{blog_dir}/**/*.md', recursive=True)
    print(f"找到 {len(blog_files)} 个博客 Markdown 文件")
    for md_file in blog_files:
        extract_and_save_images(md_file)
    
    # 处理项目文章
    project_files = glob.glob(f'{project_dir}/**/*.md', recursive=True)
    print(f"找到 {len(project_files)} 个项目 Markdown 文件")
    for md_file in project_files:
        extract_and_save_images(md_file)

if __name__ == '__main__':
    try:
        process_all_markdown_files()
        print('所有 Markdown 文件处理完成！')
    except Exception as e:
        print(f"脚本执行出错: {e}")