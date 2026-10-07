import os

files = ['index.html', 'experiences.html', 'gallery.html', 'shop.html', 'contact.html']

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('href="css/style.css"', 'href="css/style.css?v=2"')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
