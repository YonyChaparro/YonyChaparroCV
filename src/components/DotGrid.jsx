import React, { useEffect, useRef } from 'react';

const DotGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        setCanvasSize();

        const dots = [];
        const spacing = 32; 
        const radius = 1.5;
        
        // Colors
        const getDotRgb = () => {
             // Check if dark mode is active
             const isDark = document.documentElement.classList.contains('dark');
             return isDark ? '255, 255, 255' : '100, 116, 139'; // White or Slate-500
        }

        let dotRgb = getDotRgb();

        // Observer for class changes on html to update color
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    dotRgb = getDotRgb();
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });

        // Create dots
        const createDots = () => {
            dots.length = 0;
            const cols = Math.ceil(canvas.width / spacing);
            const rows = Math.ceil(canvas.height / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;
                    dots.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        size: radius,
                        opacity: 0.1 // Base opacity low
                    });
                }
            }
        };

        createDots();

        // Mouse interaction
        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                const dx = mouseX - dot.x;
                const dy = mouseY - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                let targetSize = radius;
                let targetOpacity = 0.1;

                if (dist < maxDist) {
                    const scale = (1 - dist / maxDist);
                    // Efecto lupa/resplandor
                    targetSize = radius + (scale * 1.5); 
                    targetOpacity = 0.1 + (scale * 0.4); 
                }

                // Simple lerp animation
                dot.size += (targetSize - dot.size) * 0.15;
                dot.opacity += (targetOpacity - dot.opacity) * 0.15;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${dotRgb}, ${dot.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        
        draw();

        const handleResize = () => {
            setCanvasSize();
            createDots();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };

    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default DotGrid;
