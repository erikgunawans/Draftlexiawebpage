import React, { useEffect, useRef } from 'react';

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars: { x: number; y: number; z: number; size: number }[] = [];
    const numStars = 800;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
        size: Math.random() * 2
      });
    }

    let animationFrameId: number;

    const render = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      ctx.fillStyle = 'white';
      
      // Safety check for dimensions
      if (width <= 0 || height <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        
        // Move star closer
        star.z -= 2; // Speed

        // Reset if star passes viewer
        if (star.z <= 0) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
        }

        // Project 3D coordinates to 2D
        const k = 128.0 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        // Draw star if within bounds
        if (px >= 0 && px <= width && py >= 0 && py <= height) {
            // Calculate size based on distance
            // Use explicit variable name and check to avoid IndexSizeError
            let starSize = (1 - star.z / width) * 2.5;
            
            // Explicitly clamp to 0 to prevent negative radius error
            if (starSize < 0) starSize = 0;
            
            // Safety check for NaN
            if (isNaN(starSize)) starSize = 0;

            const opacity = Math.max(0, (1 - star.z / width)); // Opacity based on distance
            
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            // Ensure radius is non-negative
            ctx.arc(px, py, starSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        if (canvas) {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
    />
  );
}
