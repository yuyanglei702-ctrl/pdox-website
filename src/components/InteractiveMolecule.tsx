import { useEffect, useRef, useState } from 'react';

/* ===== 3D Interactive Gold Molecule =====
 * A CSS 3D sphere of golden particles that follows mouse movement.
 * No Three.js needed — pure CSS transforms + React state.
 */

// Generate sphere points using Fibonacci spiral for even distribution
function generateSpherePoints(count: number, radius: number) {
  const points: { x: number; y: number; z: number; delay: number }[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  
  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    points.push({ x, y, z, delay: i * 0.02 });
  }
  
  return points;
}

// Connection lines between nearby points
function generateConnections(points: { x: number; y: number; z: number }[], maxDist: number) {
  const lines: { x1: number; y1: number; z1: number; x2: number; y2: number; z2: number; dist: number }[] = [];
  
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dz = points[i].z - points[j].z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      if (dist < maxDist) {
        lines.push({
          x1: points[i].x, y1: points[i].y, z1: points[i].z,
          x2: points[j].x, y2: points[j].y, z2: points[j].z,
          dist
        });
      }
    }
  }
  
  return lines;
}

interface Props {
  particleCount?: number;
  radius?: number;
  className?: string;
}

export default function InteractiveMolecule({ particleCount = 60, radius = 140, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef({ x: -15, y: 25 });
  const currentRef = useRef({ x: -15, y: 25 });
  const rafRef = useRef<number>(0);
  
  const points = useRef(generateSpherePoints(particleCount, radius)).current;
  const connections = useRef(generateConnections(points, radius * 0.55)).current;
  
  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      // Lerp toward target
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.06;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.06;
      
      setRotation({ ...currentRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);
  
  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized position (-1 to 1)
      const nx = (e.clientX - centerX) / (window.innerWidth / 2);
      const ny = (e.clientY - centerY) / (window.innerHeight / 2);
      
      // Map to rotation angles
      targetRef.current = {
        x: -15 + ny * -40,
        y: 25 + nx * 50
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Auto-rotation when not hovering
  useEffect(() => {
    if (isHovering) return;
    
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.003;
      targetRef.current.y = 25 + Math.sin(angle) * 15;
      targetRef.current.x = -15 + Math.cos(angle * 0.7) * 8;
    }, 16);
    
    return () => clearInterval(interval);
  }, [isHovering]);
  
  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ perspective: '800px', width: radius * 2.5, height: radius * 2.5 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 3D Sphere Container */}
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Connection lines */}
        {connections.slice(0, 80).map((line, i) => {
          const mx = (line.x1 + line.x2) / 2;
          const my = (line.y1 + line.y2) / 2;
          const mz = (line.z1 + line.z2) / 2;
          const dx = line.x2 - line.x1;
          const dy = line.y2 - line.y1;
          const len = Math.sqrt(dx * dx + dy * dy + line.dist * line.dist);
          const angleY = Math.atan2(dx, dy) * (180 / Math.PI);
          const opacity = 1 - (line.dist / (radius * 0.55));
          
          return (
            <div
              key={`line-${i}`}
              className="absolute left-1/2 top-1/2 origin-top"
              style={{
                width: '1px',
                height: `${len}px`,
                background: `linear-gradient(to bottom, rgba(201,169,110,${opacity * 0.4}), rgba(201,169,110,${opacity * 0.1}))`,
                transform: `translate3d(${mx}px, ${my}px, ${mz}px) rotate(${angleY}deg)`,
                transformStyle: 'preserve-3d',
                pointerEvents: 'none',
              }}
            />
          );
        })}
        
        {/* Particles */}
        {points.map((p, i) => {
          const size = 3 + Math.abs(p.z) / radius * 4;
          const brightness = 0.5 + (p.z + radius) / (2 * radius) * 0.5;
          const isCore = i < 8;
          
          return (
            <div
              key={`p-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: isCore ? size + 4 : size,
                height: isCore ? size + 4 : size,
                background: isCore 
                  ? `radial-gradient(circle, rgba(255,220,150,${brightness}) 0%, rgba(201,169,110,${brightness * 0.6}) 100%)`
                  : `radial-gradient(circle, rgba(201,169,110,${brightness}) 0%, rgba(201,169,110,${brightness * 0.3}) 100%)`,
                boxShadow: isCore 
                  ? `0 0 ${8 + size}px rgba(201,169,110,${brightness * 0.6}), 0 0 ${size * 2}px rgba(201,169,110,${brightness * 0.2})`
                  : `0 0 ${4 + size / 2}px rgba(201,169,110,${brightness * 0.3})`,
                transform: `translate3d(${p.x}px, ${p.y}px, ${p.z}px)`,
                transformStyle: 'preserve-3d',
                transition: 'box-shadow 0.3s ease',
                animationDelay: `${p.delay}s`,
              }}
            />
          );
        })}
        
        {/* Inner glow core */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: radius * 0.4,
            height: radius * 0.4,
            background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0.05) 40%, transparent 70%)',
            transform: `translate3d(-${radius * 0.2}px, -${radius * 0.2}px, 0px)`,
            filter: 'blur(8px)',
            pointerEvents: 'none',
          }}
        />
      </div>
      
      {/* Outer ring decoration */}
      <div 
        className="absolute inset-0 rounded-full border border-[#C9A96E]/10"
        style={{
          transform: `rotateX(${rotation.x * 0.3}deg) rotateY(${rotation.y * 0.3}deg)`,
          transition: 'transform 0.1s linear',
        }}
      />
      
      {/* Second outer ring */}
      <div 
        className="absolute inset-4 rounded-full border border-[#C9A96E]/5"
        style={{
          transform: `rotateX(${rotation.x * 0.5 + 20}deg) rotateY(${rotation.y * 0.5 - 15}deg)`,
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  );
}
