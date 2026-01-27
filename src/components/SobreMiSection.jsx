import React from 'react';
import SpotlightCard from './SpotlightCard';

const SobreMiSection = ({ currentSec }) => (
    <section id="sobremi" className="py-12 px-5">
        <div className="max-w-[1100px] mx-auto">
            <h2 className="text-5xl font-['Righteous'] text-center mb-8">Sobre Mí</h2>
            <p className="text-lg leading-relaxed text-justify mb-8">
                <span className="text-[#00BCD4] font-bold">Hola, soy Yony Chaparro. </span>
                estudiante de Ingeniería de Sistemas y Computación en la Universidad Nacional de Colombia, sede Bogotá. Me he formado como desarrollador backend y tengo experiencia creando aplicaciones full-stack, aplicando buenas prácticas de programación y lógica con JavaScript, frameworks modernos y bases de datos relacionales (SQL). Me apasiona construir soluciones completas y escalables que integren frontend y backend, y seguir aprendiendo constantemente en el campo del desarrollo de software.
            </p>
            <div className="flex flex-wrap gap-10 justify-center">
                {/* Columna Datos */}
                <div className="w-full md:w-[45%] min-w-[300px]">
                    <h3 className="text-3xl font-['Righteous'] mb-6 ml-2">Mis Datos</h3>
                    <SpotlightCard className="p-8">
                        <ul className="space-y-4">
                            {[
                                { label: 'Email', val: 'yony.chaparro.mesa@gmail.com' },
                                { label: 'Ocupación', val: 'Estudiante', highlight: true },
                                { label: 'Trabajo', val: 'Desarrollador en UIFCE / Independiente' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <strong className="inline-block w-32 text-[#00BCD4]">{item.label}</strong>
                                    {item.highlight ?
                                        <span className="bg-[#00BCD4] text-[#212B36] px-2 py-0.5 rounded font-bold">{item.val}</span>
                                        : item.val
                                    }
                                </li>
                            ))}
                        </ul>
                    </SpotlightCard>
                </div>
                {/* Columna Tecnologías */}
                <div className="w-full md:w-[45%] min-w-[300px]">
                    <h3 className="text-3xl font-['Righteous'] mb-6 ml-2">Tecnologías</h3>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {[
                            { icon: "fa-html5", name: "HTML5" },
                            { icon: "fa-css3-alt", name: "CSS3" },
                            { icon: "fa-js", name: "JavaScript" },
                            { icon: "fa-java", name: "Java SE" },
                            { icon: "fa-python", name: "Python" },
                            { icon: "fa-database", name: "SQL", solid: true },
                            { icon: "fa-bootstrap", name: "Bootstrap" },
                            { icon: "fa-react", name: "React" },
                            { icon: "fa-node-js", name: "Node.js" },
                            { icon: "fa-github", name: "GitHub" },
                            { icon: "fa-handshake-angle", name: "Scrum", solid: true },
                        ].map((tech, idx) => (
                            <SpotlightCard key={idx} className="w-24 h-24 rounded-lg">
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/80 hover:text-[#00BCD4] transition-colors">
                                    <i className={`${tech.solid ? 'fa-solid' : 'fa-brands'} ${tech.icon} text-3xl`}></i>
                                    <span className="text-xs">{tech.name}</span>
                                </div>
                            </SpotlightCard>
                        ))}
                        {/* Tailwind SVG Manual */}
                        <SpotlightCard className="w-24 h-24 rounded-lg">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/80 hover:text-[#00BCD4] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 35 25" fill="currentColor">
                                    <path d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z" />
                                </svg>
                                <span className="text-xs">Tailwind</span>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SobreMiSection;
