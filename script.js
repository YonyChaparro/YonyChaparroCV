let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skillsSection = document.getElementById("skills"); // Cambié el nombre de la variable para evitar confusión
    var distancia_skills = window.innerHeight - skillsSection.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let barrasProgreso = skillsSection.querySelectorAll(".progreso");


        barrasProgreso[0].classList.add("HTMLCSS");
        barrasProgreso[1].classList.add("javascript");
        barrasProgreso[2].classList.add("Boostrap");
        barrasProgreso[3].classList.add("Java-SE");
        barrasProgreso[4].classList.add("Python");
        barrasProgreso[5].classList.add("Comunicacion");
        barrasProgreso[6].classList.add("trabajo");
        barrasProgreso[7].classList.add("Resolucion");
        barrasProgreso[8].classList.add("Creatividad");
        barrasProgreso[9].classList.add("Dedicacion");
        barrasProgreso[10].classList.add("Responsabilidad");
        barrasProgreso[11].classList.add("Liderazgo");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

document.addEventListener('DOMContentLoaded', () => {
    const carruselTrack = document.querySelector('.carrusel-track');
    const slides = Array.from(carruselTrack.children);

    // Clona los slides para crear un efecto de bucle infinito
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carruselTrack.appendChild(clone);
    });

    let currentPosition = 0;
    const speed = 1; // Velocidad de desplazamiento en píxeles por frame
    let animationFrameId;

    // Función para el desplazamiento automático
    const startScrolling = () => {
        const totalWidth = carruselTrack.scrollWidth / 2;
        if (currentPosition >= totalWidth) {
            currentPosition = 0;
            carruselTrack.style.transform = `translateX(-${currentPosition}px)`;
        }
        currentPosition += speed;
        carruselTrack.style.transform = `translateX(-${currentPosition}px)`;
        animationFrameId = requestAnimationFrame(startScrolling);
    };

    // Detener el desplazamiento cuando el mouse está sobre el carrusel
    carruselTrack.parentNode.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationFrameId);
    });

    // Reanudar el desplazamiento cuando el mouse sale del carrusel
    carruselTrack.parentNode.addEventListener('mouseleave', () => {
        startScrolling();
    });

    // Iniciar el desplazamiento automático al cargar la página
    startScrolling();
});

function calcularTiempoUIFCE() {
    const fechaInicio = new Date(2025, 7, 1); // 1 de Agosto de 2025
    const fechaActual = new Date();
    
    let meses = (fechaActual.getFullYear() - fechaInicio.getFullYear()) * 12;
    meses -= fechaInicio.getMonth();
    meses += fechaActual.getMonth();
    
    if (fechaActual.getDate() < fechaInicio.getDate()) {
        meses--;
    }

    const elementoTiempo = document.getElementById('tiempo-uifce');
    if (elementoTiempo) {
        let texto = "";
        if (meses < 1) {
            texto = "(Recién ingresado)";
        } else if (meses < 12) {
            texto = `(${meses} mes${meses > 1 ? 'es' : ''})`;
        } else {
            const anios = Math.floor(meses / 12);
            const mesesRestantes = meses % 12;
            if (mesesRestantes === 0) {
                texto = `(${anios} año${anios > 1 ? 's' : ''})`;
            } else {
                texto = `(${anios} año${anios > 1 ? 's' : ''} y ${mesesRestantes} mes${mesesRestantes > 1 ? 'es' : ''})`;
            }
        }
        elementoTiempo.textContent = texto;
    }
}

document.addEventListener('DOMContentLoaded', calcularTiempoUIFCE);