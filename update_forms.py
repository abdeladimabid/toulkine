import os, re
files = ['contact.html', 'shop.html']
for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('<div class="contact-box" style="margin-top: 6rem;">', '<div class="contact-box">')
    content = content.replace('<div class="contact-box" style="margin-top: 4rem;">', '<div class="contact-box">')
    
    content = re.sub(r'<h2 style="text-align: center; margin-bottom: 2rem; color: var\(--color-text\); font-family: var\(--font-heading\); font-size: 2\.5rem;">(.*?)</h2>', r'<h2 class="contact-box-title">\1</h2>', content)
    
    content = re.sub(r'<p style="text-align: center; color: var\(--color-text-light\); margin-bottom: 2rem;">(.*?)</p>', r'<p class="contact-box-desc">\1</p>', content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
