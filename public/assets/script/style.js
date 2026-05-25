// window.addEventListener('scroll', function() {
//     var header = document.querySelector('header');
//     if (window.scrollY > 50) { // Altere '50' conforme necessário
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   });

document.querySelectorAll('.div-icon').forEach(function(divIcon) {
  divIcon.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = '1s';
  });

  divIcon.addEventListener('mouseout', function() {
    this.style.transform = 'none';
    this.style.transition = '0.7s';
  });
});



