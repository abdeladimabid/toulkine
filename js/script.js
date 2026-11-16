// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('nav-active');
      const icon = toggle.querySelector('i');
      if (header.classList.contains('nav-active')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });

    // Close on nav link click
    header.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-active');
        const icon = toggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
      });
    });
  }
});
