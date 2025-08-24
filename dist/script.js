const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. ¡Pronto estaremos en contacto!');
    form.reset();
  });
}
