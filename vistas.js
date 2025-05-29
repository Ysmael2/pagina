// Datos de los posts (puedes expandir esto)
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
    titulo: "TX 250  GS",
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

document.querySelectorAll('.post').forEach(post => {
  post.addEventListener('click', function() {
    const postId = this.getAttribute('data-post-id');
    const postData = posts.find(p => p.id === postId);
    if (postData) {
      document.querySelector('.container').style.display = 'none';
      document.getElementById('detalle').style.display = 'block';
      document.getElementById('detalle-contenido').innerHTML = `
      <article>
        <h2 class="post-title">${postData.titulo}</h2>
        <p>${postData.descripcion}</p>
        <img src="${postData.imagen}" width="400">
        <p>${postData.precio}</p>
      </article>
      `;
    }
  });
});

document.getElementById('volver').addEventListener('click', function() {
  document.getElementById('detalle').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
});