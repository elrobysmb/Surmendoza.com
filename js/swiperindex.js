
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.image-carousel .carousel-image');
        let currentIndex = 0;

        function showNextImage() {
            if (images.length === 0) return; // Asegurarse de que haya imágenes
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        // Muestra la primera imagen al cargar
        if (images.length > 0) {
            images[0].classList.add('active');
        }

        // Cambia la imagen cada 5 segundos
        setInterval(showNextImage, 3500);
    });
