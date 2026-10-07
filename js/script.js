document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      item.classList.add('active');
    }
  });

  // Form handling (prevent default for demo purposes)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.');
      form.reset();
    });
  });
});
