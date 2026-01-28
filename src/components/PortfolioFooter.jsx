import React from 'react';

const PortfolioFooter = ({ scrollToSection }) => (
    <footer className="py-12 relative text-center shadow-[0_-4px_8px_rgba(0,0,0,0.2)] bg-secondary">
        <button onClick={() => scrollToSection('inicio')} className="absolute left-1/2 -top-6 -translate-x-1/2 w-12 h-12 bg-[#00BCD4] text-[#212B36] rounded-full flex items-center justify-center text-lg shadow-md hover:bg-white hover:text-[#00BCD4] transition-colors">
            <i className="fa-solid fa-angles-up"></i>
        </button>
        <div className="flex justify-center gap-2 mb-5 mt-8">
            {[
                { icon: "fa-github", url: "https://github.com/YonyChaparro" },
                { icon: "fa-linkedin", url: "https://www.linkedin.com/in/yony-sebastian-chaparro-mesa-7a69b8215/" },
                { icon: "fa-instagram", url: "https://www.instagram.com/yony_scm/" },
                { icon: "fa-spotify", url: "https://open.spotify.com/user/212wrubabekugkkf3whi6r2sa?si=8ae3fdc40af84c96" }
            ].map((social, idx) => (
                <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center glass-btn"
                >
                    <i className={`fa-brands ${social.icon}`}></i>
                </a>
            ))}
        </div>
        <p className="text-sm opacity-80">© 2026 Yony Chaparro. Todos los derechos reservados.</p>
    </footer>
);

export default PortfolioFooter;
