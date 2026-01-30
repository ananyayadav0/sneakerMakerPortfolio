import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../component/figma/ImageWithFallback';

interface ProcessItem {
  step: string;
  label: string;
  title: string;
  description: string;
  image: string;
  techCode: string;
}

const processItems: ProcessItem[] = [
  {
    step: "01",
    label: "CONCEPTUALIZE",
    title: "Envision Design",
    description: "Begin with an idea shaped by inspiration, culture, and emotion. Each concept is imagined as a story waiting to take form.",
    image: "/images/img7.jpeg",
    techCode: ""
  },
  {
    step: "02",
    label: "SKETCH",
    title: "Design Drafting",
    description: "Thoughts translate into lines, silhouettes, and refined details. Every sketch captures the first heartbeat of the design.",
    image: "/images/img1.jpeg",
    techCode: ""
  },
  {
    step: "03",
    label: "IMPLEMENT",
    title: "Craft Execution",
    description: "Craftsmanship brings the vision to life through precision and experimentation. Materials, structure, and artistry merge into the final piece.",
    image: "/images/img9.jpeg",
    techCode: ""
  },
  {
    step: "04",
    label: "Experience",
    title: "Signature Elegance",
    description: "The design is meant to be worn, lived in, and owned with confidence. A finished creation becomes part of someone’s personal expression.",
    image: "/images/img8.jpeg",
    techCode: ""
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#1A1A1A] border-t border-[#333333] overflow-hidden relative">
      {/* Background Decorative Lines */}
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-[#333333] hidden md:block" />
      
      <div className="px-8 md:px-20 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className="font-[var(--font-heading)] text-6xl md:text-7xl text-white uppercase tracking-tighter leading-[0.85]">
              Wear the art.<br />
              <span className="text-[#FF5C00]">Live the story.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-mono text-[#8A8A8A] text-xs leading-relaxed uppercase tracking-widest">
              Turning everyday essentials into deeply personal expressions of style.
              My vision is to fuse craftsmanship, innovation, and individuality into designs that feel intimate, striking, and enduring.
              Each creation carries its own narrative, transforming fashion into a form of wearable storytelling.
            </p>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-20 px-8 md:px-20 gap-10 no-scrollbar cursor-grab active:cursor-grabbing">
        {processItems.map((item, idx) => (
          <motion.div 
            key={item.step}
            className="flex-shrink-0 w-[80vw] md:w-[300px]"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#333333] group bg-[#1D1D1D]">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              
              {/* Technical Overlays */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center font-mono text-[10px] text-white backdrop-blur-sm">
                    {item.step}
                  </div>
                  <div className="font-mono text-[9px] text-[#FF5C00] uppercase font-bold tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.techCode}
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="h-12 w-[1px] bg-white/20" />
                  <div className="font-mono text-[8px] text-white/30 uppercase tracking-widest text-right">
                    [ VERIFIED_PROCESS ]<br />
                    AUTODESK_GEN_TOOL
                  </div>
                </div>
              </div>
              
              {/* Animated corner accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="mt-10 px-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#FF5C00]" />
                <span className="font-mono text-[10px] text-[#FF5C00] uppercase tracking-[0.3em] font-bold">
                  {item.label}
                </span>
              </div>
              <h3 className="font-[var(--font-heading)] text-3xl text-white uppercase tracking-tight mb-4">
                {item.title}
              </h3>
              <p className="font-mono text-[#8A8A8A] text-xs leading-relaxed uppercase tracking-wider">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
        {/* End Spacer */}
        <div className="flex-shrink-0 w-8 md:w-20" />
      </div>

      {/* Technical Barcode/Footer for section */}
      <div className="px-8 md:px-20 mt-10 flex justify-between items-center opacity-20">
        <div className="font-mono text-[8px] text-white tracking-[0.5em] uppercase">
          ||| || | |||| | || | ||| | ||
        </div>
      </div>
    </section>
  );
};
