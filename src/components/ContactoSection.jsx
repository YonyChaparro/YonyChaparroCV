import React from 'react';
import SpotlightCard from './SpotlightCard';

const ContactoSection = ({ scrollToSection }) => (
    <section id="contacto" className="py-20 px-5 relative transition-colors duration-500 bg-transparent">
        
        <div className="max-w-[1200px] mx-auto relative z-10">
            <h2 className="text-5xl font-['Righteous'] text-center mb-16 text-white/90 drop-shadow-md">CONTÁCTAME</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formulario */}
                <SpotlightCard className="p-8 backdrop-blur-md bg-black/40 h-full">
                    <form action="https://formsubmit.co/ychaparro@unal.edu.co" method="POST" className="flex flex-col gap-5 h-full">
                        <h3 className="text-2xl font-bold text-white mb-2">Envíame un mensaje</h3>
                        
                        <div className="relative group">
                            <input type="text" name="name" placeholder="Tu nombre" required 
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00BCD4]/50 focus:bg-white/10 transition-all" 
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00BCD4] transition-all duration-300 group-focus-within:w-full" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="tel" name="phone" placeholder="Teléfono" required 
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00BCD4]/50 focus:bg-white/10 transition-all" 
                            />
                            <input type="email" name="email" placeholder="Correo electrónico" required 
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00BCD4]/50 focus:bg-white/10 transition-all" 
                            />
                        </div>

                        <input type="text" name="subject" placeholder="Asunto" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00BCD4]/50 focus:bg-white/10 transition-all" 
                        />
                        
                        <textarea name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required 
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00BCD4]/50 focus:bg-white/10 transition-all resize-none"
                        ></textarea>

                        <button type="submit" className="mt-auto relative w-full py-4 bg-[#00BCD4] text-[#212B36] font-bold rounded-lg overflow-hidden group transition-all hover:shadow-[0_0_20px_rgba(0,188,212,0.4)]">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Enviar Mensaje <i className="fa-regular fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>

                        <input type="hidden" name="_next" value="https://yonychaparro.github.io/YonyChaparroCV/" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </SpotlightCard>

                {/* Mapa e Info */}
                <div className="flex flex-col gap-8 h-full">
                    <SpotlightCard className="p-2 h-[300px] md:h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.883707010488!2d-74.08647568523795!3d4.636873596631248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd31e8d7c2b%3A0x8e1f8e1f8e1f8e1f!2sUniversidad%20Nacional%20de%20Colombia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                            width="100%" height="100%" style={{ border: 0, borderRadius: '8px', filter: 'grayscale(100%) invert(92%) contrast(83%)' }} allowFullScreen="" loading="lazy" title="mapa"
                            className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
                        >
                        </iframe>
                    </SpotlightCard>

                    <SpotlightCard className="p-6 flex-1 flex flex-col justify-center gap-4 bg-black/40">
                         <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00BCD4]/10 text-[#00BCD4] group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-location-dot text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-sm text-white/50 mb-1">Ubicación</h4>
                                <p className="text-lg font-bold text-white">Bogotá D.C. Colombia</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default">
                             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00BCD4]/10 text-[#00BCD4] group-hover:scale-110 transition-transform">
                                <i className="fa-solid fa-envelope text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-sm text-white/50 mb-1">Email</h4>
                                <p className="text-lg font-bold text-white">ychaparro@unal.edu.co</p>
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    </section>
);

export default ContactoSection;
