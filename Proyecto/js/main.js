
   

document.addEventListener('DOMContentLoaded', function() {   // Funcion para esperar que carge completo el HTML

     //Slider
     if(window.location.href.indexOf('index') > -1){

         const slides = document.querySelectorAll('#slider .slide');
         const slidesContainer = document.querySelector('#slider .slides');
         const prevBtn = document.querySelector('#slider .prev');
         const nextBtn = document.querySelector('#slider .next');
         let currentIndex = 0;
         const totalSlides = slides.length;
         
         function updateSlider() {
             slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider();
            });

            nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });
    
    // Inicializa el slider
    updateSlider(slides);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 10000);
    
}


    // Post
    if(window.location.href.indexOf('index') > -1){

        var posts = [
            {
                title: 'Prueba 1',
                date: 'publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + " Del aNo "+moment().format("YYYY"),
            content: 'loren ipsun dolor sit amet',
            
        },
        {
            title: 'Prueba 2',
            date: 'publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + " Del aNo "+moment().format("YYYY"),
            content: 'loren ipsun dolor sit amet',
        },
        {
            title: 'Prueba 3',
            date: 'publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + " Del aNo "+moment().format("YYYY"),       
            content: 'loren ipsun dolor sit amet',
        },
        {
            title: 'Prueba 4',
            date: 'publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + " Del aNo "+moment().format("YYYY"),
            content: 'loren ipsun dolor sit amet',
        },
        {
            title: 'Prueba 5',
            date: 'publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + " Del aNo "+moment().format("YYYY"),
            content: 'loren ipsun dolor sit amet',
        },
        {
            title: 'Prueba 6',
            date: 'publicado el dia ' + moment().format("D") + ' de ' + moment().format("MMMM") + " Del aNo "+moment().format("YYYY"),
            content: 'loren ipsun dolor sit amet',
        },
    ]
    console.log(posts);
    
    
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">LEER MAS</a>
        </article>
        `;
        document.getElementById('posts').insertAdjacentHTML('beforeend', post);
    });
    }
    
    //selector de tema
    // Cambiar a tema verde
    document.getElementById('to-green').addEventListener('click', function() {
        document.getElementById('theme').href = 'css/green.css';
    });

    // Cambiar a tema azul
    document.getElementById('to-blue').addEventListener('click', function() {
        document.getElementById('theme').href = 'css/blue.css';
    });

// Cambiar a tema rojo
    document.getElementById('to-red').addEventListener('click', function() {
    document.getElementById('theme').href = 'css/red.css';
    });


//scrol arriba de la pagina

    document.querySelector('.subir').addEventListener('click', function(e) {
      e.preventDefault(); // ¡Esto es importante!
    
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
       });
    });


  // Login falso - Versión esencial
const loginForm = document.querySelector("#login form");
const nameInput = document.getElementById("form_name");

if (loginForm && nameInput) {
    // Verificar si ya hay un usuario logueado
    const savedName = localStorage.getItem("form_name");
    if (savedName) {
        // Si ya está logueado, mostrar directamente la bienvenida
        mostrarBienvenida(savedName);
    } else {
        // Si no hay usuario, mostrar el formulario normal
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form_name = nameInput.value;
            const email = this.querySelector('input[name="email"]').value;
            const password = this.querySelector('input[name="password"]').value;
            
            if (!form_name.trim()) {
                alert('Por favor, ingresa tu nombre');
                return;
            }
            
            localStorage.setItem("form_name", form_name);
            
            // Ocultar formulario y mostrar bienvenida
            mostrarBienvenida(form_name);
        });
    }
}

function mostrarBienvenida(nombre) {
    const loginDiv = document.getElementById('login');
    
    // Reemplazar todo el contenido del div #login
    loginDiv.innerHTML = `
        <div class="welcome-container">
            <h4><span>¡Bienvenido!</span></h4>
            <div class="welcome-message">
                <p>Hola <strong>${nombre}</strong>, has iniciado sesión correctamente.</p>
                <button id="logout-btn" class="logout-button">Cerrar Sesión</button>
            </div>
        </div>
    `;
    
    // Agregar funcionalidad al botón de cerrar sesión
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem("form_name");
        location.reload(); // Recargar la página para mostrar el formulario again
    });
    
}
    // fin del login

 if(window.location.href.indexOf('reloj') > -1){
    function actualizarReloj() {
        var reloj = moment().format('hh:mm:ss');
        document.getElementById('reloj').innerHTML = reloj;
    }
    
    // Actualizar inmediatamente
    actualizarReloj();
    
    // Actualizar cada segundo
    setInterval(actualizarReloj, 1000);
}
});