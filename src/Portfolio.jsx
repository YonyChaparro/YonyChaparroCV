
import React, { useState, useEffect } from 'react';
import PortfolioHeader from './components/PortfolioHeader.jsx';
import HeroSection from './components/HeroSection.jsx';
import SobreMiSection from './components/SobreMiSection.jsx';
import CarruselSection from './components/CarruselSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import CurriculumSection from './components/CurriculumSection.jsx';
import PortfolioProjectsSection from './components/PortfolioProjectsSection.jsx';
import ContactoSection from './components/ContactoSection.jsx';
import PortfolioFooter from './components/PortfolioFooter.jsx';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Manejo del scroll para la navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para scroll suave
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    // Configuración de colores (Mapeo de tus variables CSS a valores arbitrarios de Tailwind)
    const colors = {
        primary: '#00BCD4',
        darkBg: '#212B36',
        darkSec: '#2E3B4E',
        lightBg: '#f0f2f5',
        lightSec: '#ffffff',
        textDark: '#E0E6ED',
        textLight: '#333333',
    };

    const currentBg = darkMode ? colors.lightBg : colors.darkBg;
    const currentSec = darkMode ? colors.lightSec : colors.darkSec;
    const currentText = darkMode ? colors.textLight : colors.textDark;

    return (
        <div
            className={`min-h-screen font-['Work_Sans'] transition-colors duration-300`}
            style={{ backgroundColor: currentBg, color: currentText }}
        >
            <PortfolioHeader
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                scrolled={scrolled}
                scrollToSection={scrollToSection}
                currentBg={currentBg}
                currentSec={currentSec}
            />
            <HeroSection currentBg={currentBg} darkMode={darkMode} />
            <SobreMiSection currentSec={currentSec} />
            <CarruselSection currentSec={currentSec} />
            <SkillsSection currentSec={currentSec} />
            <CurriculumSection currentSec={currentSec} />
            <PortfolioProjectsSection currentSec={currentSec} />
            <ContactoSection currentSec={currentSec} scrollToSection={scrollToSection} />
            <PortfolioFooter currentSec={currentSec} scrollToSection={scrollToSection} />
        </div>
    );
};

export default Portfolio;