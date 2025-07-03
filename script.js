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