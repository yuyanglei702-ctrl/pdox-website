import './splash.css';

export default function SplashSection() {
  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${20 + Math.random() * 60}%`,
    top: `${10 + Math.random() * 80}%`,
    size: 1 + Math.random() * 2.5,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    tx: (Math.random() - 0.5) * 100,
    ty: (Math.random() - 0.5) * 100,
  }));

  // Splash droplets
  const droplets = [
    { dx: '-25px', dy: '-20px', delay: '0.95s' },
    { dx: '20px', dy: '-18px', delay: '1.0s' },
    { dx: '-15px', dy: '-25px', delay: '1.05s' },
    { dx: '28px', dy: '-12px', delay: '1.02s' },
    { dx: '-8px', dy: '-30px', delay: '1.08s' },
    { dx: '18px', dy: '-22px', delay: '1.1s' },
  ];

  return (
    <section id="splash" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Ambient glow */}
      <div className="splash-glow" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="splash-particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `particleDrift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            ['--tx' as string]: `${p.tx}px`,
            ['--ty' as string]: `${p.ty}px`,
            opacity: 0.4,
          }}
        />
      ))}

      {/* 3D Dropper Assembly */}
      <div className="dropper-scene">
        {/* Rubber bulb */}
        <div className="dropper-bulb" />

        {/* Glass barrel with liquid */}
        <div className="dropper-barrel">
          <div className="liquid-fill">
            {/* Bubbles inside liquid */}
            <div className="liquid-bubble" style={{ left: '20%', bottom: '10%', width: '3px', height: '3px', animationDelay: '0s' }} />
            <div className="liquid-bubble" style={{ left: '50%', bottom: '30%', width: '2px', height: '2px', animationDelay: '0.7s' }} />
            <div className="liquid-bubble" style={{ left: '70%', bottom: '50%', width: '4px', height: '4px', animationDelay: '1.4s' }} />
            <div className="liquid-bubble" style={{ left: '30%', bottom: '70%', width: '2px', height: '2px', animationDelay: '2.1s' }} />
          </div>
        </div>

        {/* Conical tip */}
        <div className="dropper-tip" />

        {/* Drop forming at tip */}
        <div className="drop-forming" />

        {/* Falling drop */}
        <div className="drop-falling" />

        {/* Splash ripples */}
        <div className="splash-ripple-container">
          <div className="splash-ring" />
          <div className="splash-ring" />
          <div className="splash-ring" />
          {droplets.map((d, i) => (
            <div
              key={i}
              className="splash-droplet"
              style={{
                ['--dx' as string]: d.dx,
                ['--dy' as string]: d.dy,
                animationDelay: d.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Brand text */}
      <div className="splash-brand">
        <div className="splash-brand-text">PDOX</div>
        <div className="splash-brand-sub">Spanish Bio-Enzyme Skin Science</div>
      </div>
    </section>
  );
}
