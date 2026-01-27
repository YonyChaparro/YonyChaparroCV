import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ChromaGrid = ({ items = [] }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {items.map((item, index) => (
        <ChromaCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const ChromaCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
    >
        {/* Base Image */}
        <div className="absolute inset-0 z-10">
            <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>

        {/* Chromatic Effect Layers (Red/Blue/Green shift on hover) */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen translate-x-1 group-hover:translate-x-2">
            <img src={item.img} className="w-full h-full object-cover opacity-50 filter hue-rotate-90" alt="" />
        </div>
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen -translate-x-1 group-hover:-translate-x-2">
            <img src={item.img} className="w-full h-full object-cover opacity-50 filter hue-rotate-180" alt="" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-2xl font-['Righteous'] text-white mb-2 drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
            <p className="text-sm text-[#00BCD4] font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.tech}</p>
            
            <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-white/10 rounded-full hover:bg-[#00BCD4] hover:text-[#212B36] transition-colors backdrop-blur-sm"
                    title="Ver Demo"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <a 
                    href={item.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-white/10 rounded-full hover:bg-[#00BCD4] hover:text-[#212B36] transition-colors backdrop-blur-sm"
                    title="Ver Código"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
        </div>
        
        {/* Border Glow */}
        <div className="absolute inset-0 border-2 border-[#00BCD4]/0 group-hover:border-[#00BCD4]/50 rounded-xl transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
};

export default ChromaGrid;
