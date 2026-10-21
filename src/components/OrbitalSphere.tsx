import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface OrbitalSphereProps {
  size?: number;
  className?: string;
}

export const OrbitalSphere: React.FC<OrbitalSphereProps> = ({ size = 96, className = '' }) => {
  const [rotation, setRotation] = useState({ x: 15, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let currentY = 0;
    const animate = () => {
      if (!isDragging.current) {
        currentY = (currentY + (isHovered ? 0.35 : 0.8)) % 360;
        setRotation(prev => ({ ...prev, y: currentY }));
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    setRotation(prev => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * 0.4)),
      y: (prev.y + deltaX * 0.5) % 360
    }));
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Generate words along an equator ring and orbital latitude rings
  const ring1Text = "CREADOR-WEBS · YANIS HP · DISEÑO WEB · ";
  const ring2Text = "ALTA CONVERSIÓN · BARCELONA · 2026 · ";
  const chars1 = ring1Text.split('');
  const chars2 = ring2Text.split('');

  const radius = size * 0.46;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ width: size, height: size, perspective: '600px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        isDragging.current = false;
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      title="Creador-Webs · Yanis HP (Orbital Sphere)"
    >
      {/* Glow aura */}
      <div 
        className="absolute inset-2 rounded-full pointer-events-none transition-opacity duration-500 blur-lg"
        style={{
          background: 'radial-gradient(circle, rgba(22,213,208,0.35) 0%, rgba(3,29,44,0) 70%)'
        }}
      />

      {/* 3D Sphere Container */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {/* Core Center: Logo sphere */}
        <div
          className="absolute inset-0 m-auto rounded-full flex items-center justify-center overflow-hidden border-2 border-teal-400/50 shadow-[0_0_20px_rgba(22,213,208,0.4)]"
          style={{
            width: size * 0.48,
            height: size * 0.48,
            transform: 'translateZ(0px)',
            background: 'radial-gradient(circle at 35% 35%, #083852 0%, #031d2c 100%)'
          }}
        >
          <img
            src={PERSONAL_INFO.logoImage}
            alt="Logo Creador-Webs"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-teal-500/10 pointer-events-none mix-blend-overlay" />
        </div>

        {/* Ring 1: Equatorial text */}
        {chars1.map((char, index) => {
          const angle = (index / chars1.length) * 360;
          return (
            <span
              key={`r1-${index}`}
              className="absolute top-1/2 left-1/2 text-[9px] font-extrabold tracking-wider pointer-events-none text-teal-300 transition-colors"
              style={{
                textShadow: '0 0 6px rgba(22, 213, 208, 0.8)',
                transform: `
                  translate(-50%, -50%) 
                  rotateY(${angle}deg) 
                  translateZ(${radius}px)
                `,
                backfaceVisibility: 'visible',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}

        {/* Ring 2: Tilted orbit text */}
        {chars2.map((char, index) => {
          const angle = (index / chars2.length) * 360;
          return (
            <span
              key={`r2-${index}`}
              className="absolute top-1/2 left-1/2 text-[8px] font-bold tracking-wider pointer-events-none text-cyan-200/80"
              style={{
                textShadow: '0 0 4px rgba(22, 213, 208, 0.5)',
                transform: `
                  translate(-50%, -50%) 
                  rotateX(55deg)
                  rotateZ(${angle}deg) 
                  translateY(-${radius * 0.85}px)
                `,
                backfaceVisibility: 'visible',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}

        {/* Visual orbital wireframe rings */}
        <div
          className="absolute inset-0 m-auto rounded-full border border-teal-500/25 pointer-events-none"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: 'rotateX(80deg) translateZ(0px)',
          }}
        />
        <div
          className="absolute inset-0 m-auto rounded-full border border-teal-400/20 pointer-events-none"
          style={{
            width: radius * 1.8,
            height: radius * 1.8,
            transform: 'rotateY(65deg) translateZ(0px)',
          }}
        />
      </div>

      {/* Floating status pill underneath */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#031d2c]/90 border border-teal-400/40 text-[9px] font-mono font-semibold text-teal-300 shadow-sm whitespace-nowrap pointer-events-none">
        Creador-Webs
      </div>
    </div>
  );
};
