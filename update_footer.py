import os, re

new_footer = '''    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h2 class="footer-logo">TOULKINE</h2>
                <p>Des racines au sommet.<br>Une expérience inoubliable au cœur du Haut Atlas.</p>
            </div>
            <div class="footer-links">
                <h3>Navigation</h3>
                <ul>
                    <li><a href="index.html">Découvrir</a></li>
                    <li><a href="experiences.html">Expériences</a></li>
                    <li><a href="gallery.html">Galerie</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h3>Informations</h3>
                <ul>
                    <li><a href="shop.html">La Coopérative</a></li>
                    <li><a href="contact.html">Nous Contacter</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h3>Suivez-nous</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024-2025 Toulkine. Tous droits réservés.</p>
        </div>
    </footer>'''

files = ['index.html', 'experiences.html', 'gallery.html', 'shop.html', 'contact.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = re.sub(r'<footer.*?</footer>', new_footer, content, flags=re.DOTALL)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
