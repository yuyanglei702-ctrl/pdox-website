import { useRef, useCallback } from 'react';

/* ===== Product Hover Mask Reveal =====
 * On hover, a tech-scan overlay fades in with a circular mask reveal effect.
 * Performance optimized: uses CSS :hover + refs, minimal React state updates.
 */

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ProductHoverReveal({ children, className = '' }: Props) {
  const reticleRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);
  
  // Use ref-based mouse tracking — no setState, no re-renders
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!reticleRef.current) return;
    
    // Cancel pending RAF to batch updates
    if (rafId.current) cancelAnimationFrame(rafId.current);
    
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    rafId.current = requestAnimationFrame(() => {
      if (reticleRef.current) {
        reticleRef.current.style.left = `${x}%`;
        reticleRef.current.style.top = `${y}%`;
      }
    });
  }, []);
  
  return (
    <div
      className={`product-reveal-container relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Original content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Tech scan overlay — pure CSS hover, no JS state needed */}
      <div className="product-reveal-overlay absolute inset-0 z-20 pointer-events-none opacity-0">
        <div className="absolute inset-0 bg-[#0A0A0A]/85">
          {/* Grid lines */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,169,110,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,169,110,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
          
          {/* Scanning line animation */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent product-scan-line" />
          
          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C9A96E]/40" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C9A96E]/40" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#C9A96E]/40" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C9A96E]/40" />
          
          {/* Data readout text */}
          <div className="absolute bottom-4 left-4 text-[8px] text-[#C9A96E]/50 font-mono leading-relaxed">
            <div>MOLECULAR_SCAN_v2.4</div>
            <div>ENZYME_COMPLEX: ACTIVE</div>
            <div>PURITY: 99.7%</div>
          </div>
          
          {/* Target reticle at mouse position — ref-driven, zero re-renders */}
          <div
            ref={reticleRef}
            className="absolute w-8 h-8 pointer-events-none product-reticle"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="absolute inset-0 border border-[#C9A96E]/30 rounded-full" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#C9A96E]/20" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C9A96E]/20" />
          </div>
        </div>
        
        {/* Circular vignette */}
        <div className="absolute inset-0 product-reveal-vignette" />
      </div>
    </div>
  );
}
