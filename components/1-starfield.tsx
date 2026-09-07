"use client";

import { useEffect, useRef } from "react";

const CelebrationBackdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let frame = 0;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
      drift: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: window.innerWidth < 768 ? 35 : 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.8 + Math.random() * 2.2,
        alpha: 0.12 + Math.random() * 0.35,
        speed: 0.08 + Math.random() * 0.18,
        drift: (Math.random() - 0.5) * 0.12,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(215, 178, 124, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.y -= particle.speed;
        particle.x += particle.drift;
        if (particle.y < -5) particle.y = canvas.height + 5;
      });
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#8d3e4d]/20 blur-[130px]" />
      <div className="absolute -bottom-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-[#a57c50]/15 blur-[140px]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  );
};

export default CelebrationBackdrop;
