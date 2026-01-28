import React from 'react';

const NAV_ITEMS = [
    {
        label: 'Inicio', id: 'inicio', svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5" />
                <path d="M4 10v10a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1V10" />
            </svg>
        )
    },
    {
        label: 'Sobre mí', id: 'sobremi', svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
            </svg>
        )
    },
    {
        label: 'Skills', id: 'skills', svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2v8h8" />
                <path d="M13 12v8a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h8" />
            </svg>
        )
    },
    {
        label: 'Curriculum', id: 'curriculum', svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
            </svg>
        )
    },
    {
        label: 'Portfolio', id: 'portfolio', svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
            </svg>
        )
    },
    {
        label: 'Contacto', id: 'contacto', svg: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M22 6l-10 7L2 6" />
            </svg>
        )
    },
];

const PortfolioHeader = ({
    darkMode,
    setDarkMode,
    menuOpen,
    setMenuOpen,
    scrolled,
    scrollToSection,
    activeSection
}) => {

    // Efecto Glassmorphism más sutil
    const glassEffect = scrolled
        ? "bg-background/90 backdrop-blur-lg shadow-sm"
        : "bg-transparent py-2"; // Un poco de padding extra cuando no hay scroll

    return (
        <header
            // h-20 (80px) es el estándar de altura para navbars modernos
            className={`fixed p-12 w-full top-0 left-0 z-50 h-20 transition-all duration-300 flex items-center ${glassEffect}`}
        >
            <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10">

                {/* Logo Area */}
                <div
                    className="flex-shrink-0 cursor-pointer select-none lg:w-32"
                    onClick={() => scrollToSection('inicio')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => (e.key === 'Enter') && scrollToSection('inicio')}
                >
                    <span className="font-['Righteous'] text-3xl text-gray-800 dark:text-white hover:text-[#00BCD4] transition-colors duration-300">
                        Yony<span className="text-[#00BCD4]">.</span>
                    </span>
                </div>

                {/* Desktop Nav - CENTRADO PERFECTO */}
                <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
                    <ul className="flex list-none gap-8 items-center">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`
                                            group relative px-3 py-2 flex items-center gap-2 text-sm font-medium transition-colors duration-300
                                            focus:outline-none rounded-lg
                                            ${isActive
                                                ? 'text-[#00BCD4]'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-[#00BCD4]'}
                                        `}
                                    >
                                        {/* Icono con animación sutil */}
                                        <span className={`transition-transform duration-300 group-hover:-translate-y-0.5 ${isActive ? 'text-[#00BCD4]' : ''}`}>
                                            {item.svg}
                                        </span>
                                        <span>{item.label}</span>
                                        
                                        {/* Indicador inferior animado en lugar de fondo completo */}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#00BCD4] transition-all duration-300 ease-out 
                                            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                        `}></span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        className="relative z-50 p-2 -mr-2 focus:outline-none text-gray-800 dark:text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col items-end gap-1.5">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2 bg-[#00BCD4]' : 'w-6'}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2 bg-[#00BCD4]' : 'w-5'}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl 
                    transition-all duration-300 ease-in-out
                    ${menuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'}
                `}
            >
                {/* pt-24 asegura que el contenido empiece debajo del header (80px + espacio) */}
                <ul className="flex flex-col px-8 pt-28 gap-6 h-full overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li key={item.id} className="border-b border-gray-100 dark:border-gray-800 pb-2">
                                <button
                                    onClick={() => { scrollToSection(item.id); setMenuOpen(false); }}
                                    className={`
                                        w-full text-left py-2 flex items-center gap-4 text-xl transition-all duration-200
                                        ${isActive
                                            ? 'text-[#00BCD4] font-bold'
                                            : 'text-gray-600 dark:text-gray-300'}
                                    `}
                                >
                                    <span className={isActive ? 'text-[#00BCD4]' : 'text-gray-400'}>
                                        {item.svg}
                                    </span>
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    );
};

export default PortfolioHeader;