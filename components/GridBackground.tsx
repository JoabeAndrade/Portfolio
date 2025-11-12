"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Configuração do Mouse
    const mouse = { x: -1000, y: -1000, radius: 100 };

    // Configuração do Grid
    const spacing = 30; // Distância entre os pontos
    const baseRadius = 1.5; // Tamanho normal do ponto

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Loop para criar o Grid
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          // Calcular distância do mouse até este ponto
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Lógica de interação
          let radius = baseRadius;
          let color = "#cbd5e1"; // Slate-300 (Cinza bem claro)

          // Se o mouse estiver perto
          if (distance < mouse.radius) {
            // O ponto cresce suavemente baseado na proximidade
            const scale = 1 - distance / mouse.radius;
            radius = baseRadius + scale * 3; // Cresce até +3px
            color = "#19B6DD"; // Sua cor Accent (Azul)
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.closePath();
        }
      }

      requestAnimationFrame(draw);
    }

    // Listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
