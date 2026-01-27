import React from 'react';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpotlightCard from "./SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Componente para los items del curriculum
const TimelineItem = ({ title, subtitle, date, children, side = "left" }) => {
    const isLeft = side === "left";
    
    return (
        <div className={`relative mb-8 ${isLeft ? 'mr-0 md:mr-6' : 'ml-0 md:ml-6'}`}>
            <SpotlightCard className="shadow-lg backdrop-blur-sm hover:border-[#00BCD4]/50 transition-colors">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-white/90">{title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                        <span className="text-[#00BCD4] font-bold text-lg">{subtitle}</span>
                        <Badge variant="outline" className="w-fit text-xs border-[#00BCD4]/30 text-white/70">
                            {date}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="text-sm text-gray-300 text-justify leading-relaxed">
                    {children}
                </CardContent>
            </SpotlightCard>

            {/* Conector Visual (Desktop) - Línea horizontal hacia el centro */}
            <div className={`hidden md:flex absolute top-1/2 items-center ${isLeft ? '-right-[54px] flex-row' : '-left-[54px] flex-row-reverse'} w-[30px]`}>
                 <div className="h-[2px] w-full bg-[#00BCD4]/50"></div>
                 <div className="w-3 h-3 bg-[#00BCD4] rounded-full shadow-[0_0_10px_#00BCD4]"></div>
            </div>
        </div>
    );
};

const CurriculumSection = ({ currentSec }) => {
    return (
        <section id="curriculum" className="py-20 px-5 relative transition-colors duration-500" style={{ backgroundColor: currentSec }}>
            <div className="max-w-[1200px] mx-auto relative z-10">
                <h2 className="text-5xl font-['Righteous'] text-center mb-16 text-white/90 drop-shadow-md">Curriculum</h2>
                
                <div className="flex flex-col md:flex-row justify-between relative">
                    
                    {/* Línea central divisoria (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00BCD4]/10 via-[#00BCD4]/50 to-[#00BCD4]/10 -translate-x-1/2"></div>

                    {/* Columna Izquierda - Educación */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-['Righteous'] text-center mb-10 text-[#00BCD4]">Educación</h3>
                        
                        <TimelineItem 
                            title="Desarrollo BackEnd" 
                            subtitle="Universidad Francisco José de Caldas - ATENEA" 
                            date="Feb 2023 - Sep 2023"
                            side="left"
                        >
                            Aprendí a crear aplicaciones modernas usando buenas prácticas y lógica de programación en JavaScript y Java SE, apoyándome en frameworks. También trabajé con bases de datos SQL. Me enfoqué en diseñar aplicaciones backend seguras, organizadas y escalables.

                        </TimelineItem>

                        <TimelineItem 
                            title="Ingeniería de Sistemas y Computación" 
                            subtitle="Universidad Nacional de Colombia" 
                            date="2022 - Actualmente"
                            side="left"
                        >
                            Estudio Ingeniería de Sistemas y Computación, con interés en el desarrollo de software, resolución de problemas y análisis de sistemas. Me gusta aplicar la lógica y la tecnología para resolver desafíos reales. Siempre estoy buscando aprender algo nuevo y mejorar como desarrollador.
                        </TimelineItem>

                        <TimelineItem 
                            title="Técnico en Contabilización" 
                            subtitle="SENA" 
                            date="2016 - 2017"
                            side="left"
                        >
                            Me formé para registrar y procesar operaciones contables y financieras, hacer conciliaciones bancarias, preparar balances, cuentas de resultados y otros informes clave. Esta base me ha servido para entender mejor la lógica detrás de los sistemas administrativos.

                        </TimelineItem>
                    </div>

                    {/* Columna Derecha - Experiencia */}
                    <div className="w-full md:w-1/2 mt-12 md:mt-0">
                        <h3 className="text-3xl font-['Righteous'] text-center mb-10 text-[#00BCD4]">Experiencia</h3>

                        <TimelineItem 
                            title="Desarrollador" 
                            subtitle="UIFCE - Universidad Nacional de Colombia" 
                            date="Ago 2025 - Actualmente"
                            side="right"
                        >
                            <p className="mb-4">Desarrollo de aplicativos internos y soporte técnico especializado en la Unidad de Informática de la Facultad de Ciencias Económicas. Combino conocimientos técnicos con habilidades de gestión y servicio para apoyar los procesos de la Facultad.</p>
                            <ul className="list-disc pl-4 space-y-1 mb-4 text-white/80">
                                <li>Desarrollo Full Stack: HTML, CSS, JavaScript, y lenguajes de servidor (Python, PHP, Java, Node.js).</li>
                                <li>Gestión de Bases de Datos: Diseño y optimización de consultas SQL (PostgreSQL, MySQL).</li>
                                <li>Mantenimiento: Soporte a sistemas legacy, depuración y actualización de software.</li>
                                <li>Colaboración: Uso de Git/GitHub y metodologías de desarrollo.</li>
                                <li>Soporte: Atención a usuarios y resolución de problemas técnicos.</li>
                            </ul>
                            <Button 
                                variant="outline" 
                                className="w-full sm:w-auto border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-[#212B36]"
                                asChild
                            >
                                <a href="https://fce.unal.edu.co/unidad-de-informatica/informacion-general" target="_blank" rel="noreferrer">
                                    <img src="https://fce.unal.edu.co/bienestar/images/Logo_FCE_Blanco.png" alt="Logo UIFCE" className="h-5 w-auto mr-2 invert brightness-0" />
                                    Visitar UIFCE
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </TimelineItem>

                        <TimelineItem 
                            title="Ganador Hackatón EAAB 2025" 
                            subtitle="Programa de Innovación Abierta" 
                            date="2025"
                            side="right"
                        >
                            <p className="mb-4">Lideré la propuesta ganadora con el desarrollo de una aplicación móvil y web orientada a la identificación, caracterización y monitoreo de predios en asentamientos informales, contribuyendo al aumento de la facturación y la reducción de pérdidas de agua en la Empresa de Acueducto y Alcantarillado de Bogotá (EAAB). La solución integró un sistema de gamificación e incentivos, formularios digitales con georreferenciación GPS para la autovinculación al Ciclo I y un canal directo de comunicación entre comunidad y EAAB, destacándose por su enfoque innovador, escalable y sostenible.</p>
                            
                            <div className="mb-4">
                                <h4 className="font-bold text-[#00BCD4] mb-2">Aportes clave:</h4>
                                <ul className="list-disc pl-4 space-y-1 text-white/80">
                                    <li><strong className="text-white/90">Gamificación e incentivos:</strong> puntos y recompensas tangibles.</li>
                                    <li><strong className="text-white/90">Autovinculación de predios:</strong> formularios y validación georreferenciada.</li>
                                    <li><strong className="text-white/90">Monitoreo:</strong> reportes comunitarios y analítica básica.</li>
                                    <li><strong className="text-white/90">Comunicación:</strong> canal directo comunidad ↔ EAAB.</li>
                                    <li><strong className="text-white/90">Enfoque:</strong> innovación, escalabilidad y sostenibilidad.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h4 className="font-bold text-[#00BCD4] mb-2">Entidades involucradas:</h4>
                                <p className="text-xs text-white/70 leading-relaxed italic">
                                    Universidad Pontificia Javeriana, CEA - IOT, Empresa de Acueducto y Alcantarillado de Bogotá (EAAB), CEWAS, Young Water Solutions, Schweizerische Eidgenossenschaft (Confederación Suiza), Embajada de Suiza en el Perú, Banco Interamericano de Desarrollo (BID).
                                </p>
                            </div>

                            <div className="rounded-lg overflow-hidden border border-white/10">
                                <img src="/img/Fotos%20Hackaton%20AyC%20Ganadores.webp" alt="Hackaton EAAB" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </TimelineItem>

                        <TimelineItem 
                            title="Desarrollador Backend" 
                            subtitle="Independiente" 
                            date="Desde 2023"
                            side="right"
                        >
                            <p className="mb-4">Me encanta programar y resolver problemas con código. He creado varias aplicaciones web como desarrollador full-stack, trabajando tanto el frontend como el backend. Aprendo rápido y me adapto a los retos que surjan, siempre buscando escribir un código limpio y útil para quienes lo usan.</p>
                            
                            <div className="mb-4">
                                <h4 className="font-bold text-[#00BCD4] mb-2">Habilidades:</h4>
                                <ul className="list-disc pl-4 space-y-1 text-white/80">
                                    <li><strong className="text-white/90">Lenguajes:</strong> JavaScript (Node.js), Java, Python</li>
                                    <li><strong className="text-white/90">Frameworks:</strong> Express.js, Spring Boot, Django</li>
                                    <li><strong className="text-white/90">Bases de datos:</strong> MySQL, PostgreSQL</li>
                                    <li><strong className="text-white/90">Control de versiones:</strong> Git, GitHub</li>
                                    <li><strong className="text-white/90">Metodologías:</strong> Scrum</li>
                                    <li><strong className="text-white/90">Herramientas:</strong> Postman, VS Code</li>
                                </ul>
                            </div>
                        </TimelineItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;
