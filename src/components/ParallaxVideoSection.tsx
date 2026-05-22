import { useEffect, useRef } from 'react';

/* ===== Parallax Scroll-Controlled Video Background =====
 * Video plays based on scroll position — as user scrolls through the section,
 * the video progresses. Text content parallax scrolls over the video.
 * Optimized: uses refs + direct DOM manipulation, throttled scroll handling.
 */

interface Props {
  videoSrc: string;
  children?: React.ReactNode;
  className?: string;
  scrollHeight?: string;
}

export default function ParallaxVideoSection({ 
  videoSrc, 
  children, 
  className = '',
  scrollHeight = '250vh'
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);
  
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    if (!section || !video || !content) return;
    
    // Preload video metadata
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    
    // Wait for video to be ready
    const onLoaded = () => {
      video.pause();
      video.currentTime = 0;
    };
    video.addEventListener('loadedmetadata', onLoaded);
    if (video.readyState >= 1) onLoaded();
    
    // Use IntersectionObserver to only process when visible
    let isVisible = false;
    
    const updateVideo = () => {
      ticking.current = false;
      if (!isVisible || !video.duration || isNaN(video.duration)) return;
      
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const totalScroll = sectionHeight + viewportHeight;
      
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / totalScroll));
      
      // Sync video time to scroll progress (direct assignment, no setState)
      const targetTime = progress * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.15) {
        video.currentTime = targetTime;
      }
      
      // Parallax content — direct DOM transform (no setState)
      const parallaxOffset = (progress - 0.5) * -80;
      content.style.transform = `translateY(${parallaxOffset}px)`;
    };
    
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateVideo);
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial update
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0, rootMargin: '200px' }
    );
    
    observer.observe(section);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', onLoaded);
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className={`relative ${className}`}
      style={{ height: scrollHeight }}
    >
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          style={{ willChange: 'transform' }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Gold gradient edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
        
        {/* Parallax content layer — direct DOM manipulation for performance */}
        <div 
          ref={contentRef}
          className="relative z-10 h-full flex items-center justify-center will-change-transform"
        >
          {children}
        </div>
        
        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
          <span className="text-[8px] uppercase tracking-[4px] text-white/30 font-sans">Scroll</span>
        </div>
      </div>
    </div>
  );
}
