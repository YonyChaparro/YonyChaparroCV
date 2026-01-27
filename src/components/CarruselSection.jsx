import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingGallery from './RollingGallery';

const CarruselSection = ({ currentSec }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/img/Desarrollo-Back-End-Yony-Chaparro.webp",
        "/img/Machine-Learning-y-Data-Science.webp",
        "/img/Cybersecurity-Fundamentals.webp",
        "/img/LATAM-GCCF2023-Yony-Sebastian-Chaparro-Mesa.webp",
        "/img/Preparate Data fot ML APIs on Google Cloud.webp",
        "/img/Implement Load Balancing on Compute Engine on Google Cloud.webp",
        "/img/Build a Secure.webp",
        "/img/Set Up al App Dev Enviroment on Google Cloud.webp",
        "/img/certificado-backend-conceptual.webp"
    ];

    return (
        <section className="py-20 overflow-hidden relative">
            <h3 className="text-center text-3xl font-bold mb-10 text-white/90 tracking-wide drop-shadow-md">Certificaciones</h3>
            <div className="w-full h-[300px] relative z-10 flex items-center justify-center">
                 <RollingGallery autoplay={true} images={images} onImageClick={setSelectedImage} />
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage}
                            alt="Certificado Full Size"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} 
                        />
                         <button 
                            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fondo con el color de la sección */}
            <div 
                className="absolute inset-0 -z-10 opacity-20 transition-colors duration-500" 
                style={{ backgroundColor: currentSec }} 
            />
        </section>
    );
};

export default CarruselSection;
