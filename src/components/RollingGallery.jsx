import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [], onImageClick }) => {
  const [isScreenSize, setIsScreenSize] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 640);
  
  useEffect(() => {
    const handleResize = () => setIsScreenSize(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuración del cilindro
  const cylinderWidth = isScreenSize ? 1100 : 2000; 
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount); // Ancho aproximado de cada cara
  const radius = cylinderWidth / (1.5 * Math.PI); // Radio del cilindro

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotateY(${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
        let animationId;
        const animate = () => {
            rotation.set(rotation.get() - 0.05);
            animationId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animationId);
    }
  }, [autoplay, rotation]);

  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="relative flex h-full w-full items-center justify-center [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          className="relative flex h-full origin-center cursor-grab justify-center [transform-style:preserve-3d] active:cursor-grabbing"
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          {images.map((url, i) => {
            return (
              <div
                key={i}
                className="absolute flex h-full origin-center items-center justify-center p-2"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden", 
                }}
              >
                <img
                  src={url}
                  alt="gallery-item"
                  className="h-[140px] w-full rounded-xl object-contain border-2 border-white/10 bg-black/20 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar conflictos con el drag
                    onImageClick && onImageClick(url);
                  }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Overlay gradiente para suavizar los bordes si se desea */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] w-full z-10 opacity-20" />
    </div>
  );
};

export default RollingGallery;
