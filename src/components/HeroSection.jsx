import React from 'react';
import Lanyard from './Lanyard';
import { Github, Linkedin, Mail } from 'lucide-react'; // Imports genéricos útiles para una tarjeta

const HeroSection = ({ currentBg, darkMode }) => (
    <section id="inicio" className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{
            backgroundImage: `linear-gradient(to top, ${darkMode ? 'rgba(255,255,255,0.5), rgba(255,255,255,0.8)' : 'rgba(30,35,38,.8), rgba(30,35,38,1)'}), url('https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
    >
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            {/* Optional: Overlay text non-interactive or behind */}
        </div>

        <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]}>
            <div className="contenido-banner w-full h-full flex flex-col items-center justify-center text-center p-4 text-white bg-transparent">
                <div className="contenedor-img w-96 h-96 mb-5 rounded-full overflow-hidden border-[5px] border-[#00BCD4] shadow-2xl mx-auto">
                    <img src="/img/foto de perfil CV.webp" alt="Yony" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-5xl font-black mb-3 tracking-widest uppercase drop-shadow-lg font-['Righteous'] leading-none">
                    Yony<br className="block" />Chaparro
                </h1>
                <h2 className="text-2xl font-semibold mb-6 opacity-100 max-w-[90%] mx-auto leading-snug font-['Work_Sans']">
                    Estudiante de Ingeniería de Sistemas y Computación
                </h2>
                <div className="redes flex gap-6 text-4xl mt-1 justify-center">
                    <a href="https://github.com/YonyChaparro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yony-sebastian-chaparro-mesa-7a69b8215/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:scale-110">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/yony_scm/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:scale-110">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://open.spotify.com/user/212wrubabekugkkf3whi6r2sa?si=8ae3fdc40af84c96" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors transform hover:scale-110">
                        <i className="fa-brands fa-spotify"></i>
                    </a>
                </div>
            </div>
        </Lanyard>
    </section>
);


export default HeroSection;
