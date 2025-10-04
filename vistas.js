// =============================================
// DATOS DE LOS POSTS (podría moverse a un JSON externo)
// =============================================
const posts = [
  {
    id: "1",
    titulo: "Toro REX 250",
    descripcion: "Doble Propósito",
    imagen: "img/OIP.jpg",
    precio: "1890$"
  },
  {
    id: "2",
    titulo: "TX 250 GS",
    descripcion: "Doble Proposito",
    imagen: "img/tx250gs.png",
    precio: "2200$"
  },
  {
    id: "3",
    titulo: "Kawasaki KLR 650",
    descripcion: "Doble Proposito",
    imagen: "img/KLR.jpg",
    precio: "4000$"
  },
  {
    id: "4",
    titulo: "Kawasaki KLR 650",
    descripcion: "Doble Proposito",
    imagen: "img/www.webp",
    precio: "4000$"
  }
];

// =============================================
// VARIABLES GLOBALES
// =============================================
let lastScrollY = 0; // Guarda la posición del scroll al abrir detalle

// =============================================
// FUNCIONES PRINCIPALES
// =============================================

/**
 * Muestra el detalle de un post
 * @param {string} postId - ID del post a mostrar
 */
function mostrarDetalle(postId) {
  lastScrollY = window.scrollY;
  const postData = posts.find(p => p.id === postId);
  
  if (!postData) return; // Validación básica

  // Ocultar lista y preparar detalle
  document.querySelector('.container').style.display = 'none';
  const detalle = document.getElementById('detalle');
  
  // Generar contenido HTML
  document.getElementById('detalle-contenido').innerHTML = `
    <article>
      <h2 class="post-title">${postData.titulo}</h2>
      <p>${postData.descripcion}</p>
      <img src="${postData.imagen}" alt="${postData.titulo}" width="400">
      <p>${postData.precio}</p>
    </article>
  `;

  // Mostrar con animación
  detalle.style.display = 'block';
  void detalle.offsetWidth; // Forzar reflujo para la transición
  detalle.classList.add('visible');
}

/**
 * Oculta el detalle y vuelve a la vista principal
 */
function volverALista() {
  const detalle = document.getElementById('detalle');
  detalle.classList.remove('visible');
  
  setTimeout(() => {
    detalle.style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    window.scrollTo(0, lastScrollY); // Restaurar scroll
  }, 500); // Coincide con la duración de la transición CSS
}

// =============================================
// INICIALIZACIÓN (Event Listeners)
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  // Click en posts
  document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', () => {
      mostrarDetalle(post.getAttribute('data-post-id'));
    });
  });

  // Botón volver
  document.getElementById('volver').addEventListener('click', volverALista);
});