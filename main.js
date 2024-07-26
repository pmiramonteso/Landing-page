
  
document.addEventListener("DOMContentLoaded", function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarOverlay = document.createElement('div');
  navbarOverlay.classList.add('navbar-overlay');
  document.body.appendChild(navbarOverlay);

  navbarToggler.addEventListener('click', function() {
    if (navbarToggler.getAttribute('aria-expanded') === 'false') {
      navbarOverlay.style.display = 'block';
    } else {
      navbarOverlay.style.display = 'none';
    }
  });

  navbarOverlay.addEventListener('click', function() {
    document.querySelector('.navbar-toggler').click();
    navbarOverlay.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
      }
    }, false);
  });
});