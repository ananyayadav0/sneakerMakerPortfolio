import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../component/figma/ImageWithFallback';

interface HeroProps {
  designerName?: string;
}

export const Hero: React.FC<HeroProps> = ({ designerName = "HARSHIT YADAV" }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row border-b border-[#333333] pt-24 md:pt-0">
      {/* Left Side: Designer Name */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-20 border-r border-[#333333] bg-[#1A1A1A]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >          
          <h1 className="font-[var(--font-heading)] text-7xl md:text-[11rem] font-bold leading-[0.8] text-white tracking-tighter uppercase">
            {designerName.split(' ').map((part, i) => (
              <React.Fragment key={i}>
                {part}<br />
              </React.Fragment>
            ))}
          </h1>

          <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
            <p className="max-w-xs text-[#8A8A8A] font-mono text-[11px] leading-relaxed uppercase">
              Explore my previous work and design journey through a curated archive of past projects and prototypes.
            </p>
            <motion.a 
              href="#archive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF5C00] text-white px-10 py-5 rounded-[24px] font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-[#FF7A33] transition-colors shadow-2xl shadow-[#FF5C00]/20"
            >
              Explore Archive
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Right Side: 3D Render */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-[#1D1D1D]">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF5C00]/20 blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
        </div>
        
        <div className="relative z-10 w-full max-w-2xl px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative"
          >
            {/* Glassmorphism Frame */}
            <div className="glassmorphism rounded-[32px] p-8 md:p-12 border border-white/10 aspect-square flex items-center justify-center relative overflow-hidden group">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [-12, -8, -12]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full flex items-center justify-center drop-shadow-[0_50px_50px_rgba(0,0,0,0.6)]"
              >
                <ImageWithFallback
                  src="/images/img4.jpeg"
                  alt="3D Prototype"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Technical Labels 
              <div className="absolute top-8 left-8 flex flex-col gap-1">
                <span className="font-mono text-[9px] text-[#FF5C00] font-bold">TYPE_01</span>
                <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">Structural_Mesh_V4</span>
              </div>
              
              <div className="absolute bottom-8 right-8 text-right flex flex-col gap-1">
                <span className="font-mono text-[9px] text-white/60">CORD_SYS: 52.44N / 13.40E</span>
                <span className="font-mono text-[8px] text-white/20 uppercase">Prototype_Render_Alpha</span>
              </div> 
              */}
              
              {/* Animated Scan Line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-[#FF5C00]/20 z-0 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>
    </section>
  );
};
