import React, { useEffect, useRef } from 'react';
import '../styles/components.css';

function ShootingStar() {
  const canvasRef = useRef(null);
  const trailsRef = useRef([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      mousePosRef.current.x = e.clientX;
      mousePosRef.current.y = e.clientY;

      // eslint-disable-next-line no-magic-numbers
      const trailSize = Math.random() * 1.5 + 0.5;
      const maxTrails = 15;

      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        size: trailSize,
      });

      if (trailsRef.current.length > maxTrails) {
        trailsRef.current.shift();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawFrame = () => {
      const trailDecay = 0.08;
      trailsRef.current.forEach((trail) => {
        // eslint-disable-next-line no-param-reassign
        trail.life -= trailDecay;
      });
      trailsRef.current = trailsRef.current.filter((trail) => trail.life > 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar rastros
      trailsRef.current.forEach((trail) => {
        const opacity = trail.life;
        ctx.fillStyle = `rgba(255, 215, 0, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.strokeStyle = `rgba(100, 149, 237, ${opacity * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Desenhar cursor
      const glow = 6;
      const gradient = ctx.createRadialGradient(
        mousePosRef.current.x,
        mousePosRef.current.y,
        0,
        mousePosRef.current.x,
        mousePosRef.current.y,
        glow,
      );
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
      gradient.addColorStop(0.6, 'rgba(255, 215, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mousePosRef.current.x, mousePosRef.current.y, glow, 0, Math.PI * 2);
      ctx.fill();

      // Inner circle
      ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
      ctx.beginPath();
      ctx.arc(mousePosRef.current.x, mousePosRef.current.y, 3, 0, Math.PI * 2);
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(drawFrame);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animationFrameRef.current = requestAnimationFrame(drawFrame);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={ canvasRef }
      style={ {
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        cursor: 'none',
      } }
    />
  );
}

export default ShootingStar;
