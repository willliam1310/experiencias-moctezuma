document.addEventListener('DOMContentLoaded', () => {
  const categorias = document.querySelectorAll('.menu-lateral ul li');
  const iconos = [
    'fa-solid fa-seedling',
    'fa-solid fa-leaf',
    'fa-solid fa-utensils',
    'fa-solid fa-mortar-pestle',
    'fa-solid fa-gift'
  ];

  categorias.forEach((li, index) => {
    const icono = document.createElement('i');
    icono.className = iconos[index] + ' iconito';
    li.prepend(icono);
  });

  actualizarFondo();
});

function toggleMenu() {
  const menu = document.getElementById('menuLateral');
  menu.classList.toggle('mostrar');
}

const botonModoOscuro = document.getElementById("botonModoOscuro");

botonModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  botonModoOscuro.textContent = document.body.classList.contains("modo-oscuro")
    ? "☀️ Modo Claro"
    : "🌙 Modo Oscuro";
});

let slideActual = 0;
const slides = document.querySelectorAll('.contenido-slide');
const presentacion = document.querySelector('.presentacion');
const productosDestacados = document.getElementById('productosDestacados');

function actualizarFondo() {
  if (productosDestacados.classList.contains('fade-activo')) {
    const imgSrc = productosDestacados.querySelector('img')?.src;
    if (imgSrc) {
      presentacion.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.6), transparent), url('${imgSrc}')`;
    }
  } else {
    const slide = slides[slideActual];
    const img = slide.querySelector('img');
    if (img) {
      presentacion.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.6), transparent), url('${img.src}')`;
    }
  }
}

function cambiarSeccion(direccion) {
  slides[slideActual].classList.remove('activo');
  slideActual = (slideActual + direccion + slides.length) % slides.length;
  slides[slideActual].classList.add('activo');
  productosDestacados.classList.remove('fade-activo');
  actualizarFondo();
}

function mostrarProductosDestacados() {
  slides.forEach(s => s.classList.remove('activo'));
  productosDestacados.classList.add('fade-activo');
  actualizarFondo();
}
