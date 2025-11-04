document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener una referencia al botón que añadimos en el HTML
    const scrollButton = document.getElementById('scrollToTopBtn');

    if (scrollButton) {
        // 2. Lógica para MOSTRAR u OCULTAR el botón
        // (Se ejecuta cada vez que el usuario hace scroll)
        window.onscroll = function() {
            // Revisa si el desplazamiento vertical es mayor a 200 píxeles
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollButton.style.display = "block"; // Mostrar botón
            } else {
                scrollButton.style.display = "none";  // Ocultar botón
            }
        };

        // 3. Lógica para el DESPLAZAMIENTO SUAVE
        // (Se ejecuta al hacer clic en el botón)
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento animado y suave
            });
        });
    }

    // Mensaje de consola que verifica que el script se cargó
    console.log("¡El portafolio de Ingrid Vela se ha cargado con éxito y el script JS está activo!");
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollToTopBtn');
    const profilePhoto = document.querySelector('.profile-photo'); 

    if (scrollButton) {
        // 2. Lógica para MOSTRAR u OCULTAR el botón (Código anterior)
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollButton.style.display = "block";
            } else {
                scrollButton.style.display = "none";
            }
        };

        // 3. Lógica para el DESPLAZAMIENTO SUAVE (Código anterior)
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Lógica para el efecto de VOLTEO de la imagen (NUEVA LÓGICA)
    if (profilePhoto) {
        // Al pasar el ratón (hover) sobre la imagen
        profilePhoto.addEventListener('mouseover', () => {
            // Se añade la nueva clase 'flip-profile'
            profilePhoto.classList.add('flip-profile');
        });

        // Al quitar el ratón de la imagen
        profilePhoto.addEventListener('mouseout', () => {
            // Se quita la nueva clase 'flip-profile'
            profilePhoto.classList.remove('flip-profile');
        });
    }

    // Mensaje de consola que verifica que el script se cargó
    console.log("¡El portafolio de Ingrid Vela se ha cargado con éxito y el script JS está activo!");
});
