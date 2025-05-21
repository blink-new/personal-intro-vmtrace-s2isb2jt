import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  originalX: number;
  originalY: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize stars
    const initStars = () => {
      const starCount = Math.min(Math.max(window.innerWidth, window.innerHeight) * 0.15, 300);
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        starsRef.current.push({
          x,
          y,
          originalX: x,
          originalY: y,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.1 + 0.05,
        });
      }
    };

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Regenerate stars when resizing
      initStars();
    };

    window.addEventListener('resize', resize);
    initStars(); // Call initStars here

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw stars
      starsRef.current.forEach(star => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - star.x;
        const dy = mouseRef.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250; // Max distance for mouse influence
        if (distance < maxDistance) {
          // Move stars away from mouse
          const angle = Math.atan2(dy, dx);
          const force = (maxDistance - distance) / maxDistance * star.speed * 5;
          star.x -= Math.cos(angle) * force;
          star.y -= Math.sin(angle) * force;
        } else {
          // Gradually return to original position
          star.x += (star.originalX - star.x) * 0.02;
          star.y += (star.originalY - star.y) * 0.02;
        }
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default StarryBackground;