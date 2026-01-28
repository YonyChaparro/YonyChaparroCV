
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
import DotGrid from './components/DotGrid.jsx';

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Sync darkMode with Tailwind class
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

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

    return (
        <div
            className={`min-h-screen font-['Work_Sans'] transition-colors duration-300 bg-background text-foreground relative`}
        >
            <DotGrid />
            <div className="relative z-10">
                <PortfolioHeader
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    scrolled={scrolled}
                    scrollToSection={scrollToSection}
                />
                <HeroSection darkMode={darkMode} />
                <SobreMiSection />
                <CarruselSection />
                <SkillsSection />
                <CurriculumSection />
                <PortfolioProjectsSection />
                <ContactoSection scrollToSection={scrollToSection} />
                <PortfolioFooter scrollToSection={scrollToSection} />
            </div>
        </div>
    );
};

export default Portfolio;