document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');

    // Mantener el diseño 1 visible por 2 segundos
    setTimeout(() => {
        intro.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        intro.style.transform = "scale(5)";
        intro.style.opacity = "0";

        // Ocultar el diseño 1 después de la animación
        setTimeout(() => {
            intro.style.display = "none";
            intro.style.visibility = "hidden"; // Asegurar que no reaparezca
            mainContent.classList.remove('hidden');
            mainContent.style.display = "flex"; // Mostrar el contenido principal
            mainContent.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            mainContent.style.transform = "scale(1)";
            mainContent.style.opacity = "1";
        }, 1000); // Tiempo de duración de la animación de desvanecimiento
    }, 2000); // Tiempo que se mantiene el diseño 1 antes de comenzar la animación
});
