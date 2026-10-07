document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const header = document.querySelector('header');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      header.classList.toggle('nav-active');
      
      // Change icon from bars to times when active
      const icon = mobileMenuBtn.querySelector('i');
      if (header.classList.contains('nav-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('header a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      // Don't add active color if it's the logo
      if (!item.querySelector('img')) {
        item.style.color = 'var(--color-primary)';
      }
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
