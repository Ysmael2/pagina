// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelectorAll('#slider .slide');
//     const slidesContainer = document.querySelector('#slider .slides');
//     const prevBtn = document.querySelector('#slider .prev');
//     const nextBtn = document.querySelector('#slider .next');
//     let currentIndex = 0;
//     const totalSlides = slides.length;

//     function updateSlider() {
//         slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     prevBtn.addEventListener('click', function() {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         updateSlider();
//     });

//     nextBtn.addEventListener('click', function() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateSlider();
//     });

//     // Inicializa el slider
//     updateSlider(slides);
//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateSlider();
//     }, 10000);
// });
// // ...código existente...