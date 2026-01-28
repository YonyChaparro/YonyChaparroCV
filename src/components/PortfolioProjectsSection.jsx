import React from 'react';
import ChromaGrid from './ChromaGrid';

const PortfolioProjectsSection = () => {
    const projects = [
        { title: "El Espiral", img: "https://github.com/YonyChaparro/JavaLi/blob/main/Proyecto/PosYa-app/public/icons/logo.png?raw=true", link: "https://yonychaparro.github.io/Marketing-Digital/index.html", repo: "https://github.com/YonyChaparro/Marketing-Digital", tech: "HTML, CSS, JavaScript" },
        { title: "PosYa!", img: "https://github.com/YonyChaparro/JavaLi/blob/main/Proyecto/PosYa-app/public/icons/logo.png?raw=true", link: "https://posya.onrender.com/", repo: "https://github.com/YonyChaparro/JavaLi", tech: "TypeScript, React, Express, DIAN" },
        { title: "La casa de las semillas", img: "img/la casa de las semillas.png", link: "https://ecommerce-seed-house.vercel.app/", repo: "https://github.com/YonyChaparro/seed-house-components", tech: "React, Bootstrap, Sass" },
        { title: "Gestión Alquileres", img: "https://transportesyserviciosantioquia.com/wp-content/uploads/2020/04/Afiliaci%C3%B3n-de-vehiculos-de-servicio-p%C3%BAblico-04-Transportes-y-Servicios.jpg", link: "https://tpt-web.onrender.com", repo: "https://github.com/YonyChaparro/TPT---WEB", tech: "Node.js, Express, SQLite" },
        { title: "WeatherAPP", img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", link: "https://yonychaparro.github.io/WatherAPP/", repo: "https://github.com/YonyChaparro/WatherAPP", tech: "TailwindCSS, API OpenWeather" },
        { title: "Organizador Python", img: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", link: "https://yonychaparro.github.io/Organizador-de-archivos/", repo: "https://github.com/YonyChaparro/Organizador-de-archivos", tech: "Python, Tkinter" },
        { title: "Calculadora DOM", img: "https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg", link: "https://yonychaparro.github.io/CalculadoraATENEA/", repo: "https://github.com/YonyChaparro/CalculadoraATENEA", tech: "JavaScript Nativo" },
        { title: "ToDo CLI", img: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", link: "https://github.com/YonyChaparro/TodoCLI", repo: "https://github.com/YonyChaparro/TodoCLI", tech: "Node.js CLI" },
    ];

    return (
        <section id="portfolio" className="py-20 px-5 transition-colors duration-500 bg-transparent">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-5xl font-['Righteous'] text-center mb-12 text-white/90 drop-shadow-md">MIS PROYECTOS</h2>
                <ChromaGrid items={projects} />
            </div>
        </section>
    );
};

export default PortfolioProjectsSection;
