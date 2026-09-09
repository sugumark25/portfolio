import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  isGlowing: boolean;
  glowTimer: number;
  pulseSpeed: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 200
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Click shockwave collection
    const shockwaves: Shockwave[] = [];

    const handleClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 220,
        alpha: 0.8
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Color palette for nodes and connections
    const colors = [
      'rgba(56, 189, 248, ',  // Cyan (#38bdf8)
      'rgba(99, 102, 241, ',  // Indigo (#6366f1)
      'rgba(168, 85, 247, ',  // Purple (#a855f7)
      'rgba(59, 130, 246, '   // Blue (#3b82f6)
    ];

    // Nebula floating ambient light nodes
    const nebulaOrbs = [
      { x: width * 0.2, y: height * 0.25, vx: 0.2, vy: 0.15, radius: 280, color: 'rgba(6, 182, 212, 0.08)' },
      { x: width * 0.8, y: height * 0.7, vx: -0.15, vy: -0.2, radius: 320, color: 'rgba(99, 102, 241, 0.07)' },
      { x: width * 0.5, y: height * 0.85, vx: 0.1, vy: -0.1, radius: 250, color: 'rgba(168, 85, 247, 0.06)' }
    ];

    // Spawn constellation particles
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles: Particle[] = [];
    const packets: Packet[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const isGlowing = Math.random() < 0.25;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: isGlowing ? Math.random() * 2 + 2.2 : Math.random() * 1.5 + 1.0,
        baseRadius: isGlowing ? 2.8 : 1.5,
        color: colorBase,
        isGlowing,
        glowTimer: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // Packet spawner along node connections
    const packetInterval = setInterval(() => {
      if (particles.length < 2) return;
      const i1 = Math.floor(Math.random() * particles.length);
      let closestIdx = -1;
      let minDist = 190;

      for (let j = 0; j < particles.length; j++) {
        if (i1 === j) continue;
        const dx = particles[i1].x - particles[j].x;
        const dy = particles[i1].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = j;
        }
      }

      if (closestIdx !== -1 && packets.length < 14) {
        packets.push({
          fromNode: i1,
          toNode: closestIdx,
          progress: 0,
          speed: 0.012 + Math.random() * 0.02,
          color: particles[i1].color
        });
      }
    }, 700);

    // Animation render loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating nebula ambient glow orbs
      for (const orb of nebulaOrbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const radialGlow = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        radialGlow.addColorStop(0, orb.color);
        radialGlow.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render mouse dynamic highlight aura
      if (mouse.x > 0 && mouse.y > 0) {
        const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        mouseGlow.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 4.5;
        sw.alpha -= 0.015;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${sw.alpha})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Push particles affected by shockwave ring
        for (const p of particles) {
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - sw.radius) < 25 && dist > 0) {
            p.x += (dx / dist) * 2;
            p.y += (dy / dist) * 2;
          }
        }
      }

      // Update and draw particles & connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Canvas boundary bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse glow
        p.glowTimer += p.pulseSpeed;
        const pulseFactor = Math.sin(p.glowTimer) * 0.35 + 1;

        // Mouse magnetic attraction / interaction
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.radius && mdist > 0) {
          const force = (mouse.radius - mdist) / mouse.radius;
          p.x -= (mdx / mdist) * force * 1.2;
          p.y -= (mdy / mdist) * force * 1.2;
        }

        // Draw node connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${p.color}${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Render particle node core
        const currentRadius = p.radius * (p.isGlowing ? pulseFactor : 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.isGlowing ? '0.95)' : '0.75)'}`;
        ctx.fill();

        // Outer glow ring for glowing nodes
        if (p.isGlowing) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}0.18)`;
          ctx.fill();
        }
      }

      // Update and draw traveling data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        const n1 = particles[pkt.fromNode];
        const n2 = particles[pkt.toNode];

        if (!n1 || !n2) {
          packets.splice(k, 1);
          continue;
        }

        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const currX = n1.x + (n2.x - n1.x) * pkt.progress;
        const currY = n1.y + (n2.y - n1.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(packetInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
    />
  );
};
