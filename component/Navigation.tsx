import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from "../content/data";

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-8 md:p-12 flex justify-between items-start pointer-events-none">
      {/* Brand */}
      <div className="pointer-events-auto">
        <a href="#" className="flex flex-col gap-1 group">
          <div className="font-[var(--font-heading)] text-3xl text-white font-bold tracking-tighter leading-none">
            HY<span className="text-[#FF5C00]">.</span>
          </div>
          <div className="font-mono text-[8px] text-[#8A8A8A] uppercase tracking-[0.4em] group-hover:text-white transition-colors">
            Golden_Sneaker_Maker
          </div>
        </a>
      </div>
      
      {/* Links */}
      <div className="hidden md:flex flex-col items-end gap-6 pointer-events-auto">
        <div className="flex gap-12">
          {['Archive', 'Process', 'Reviews', 'Manifesto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] text-white/60 uppercase tracking-[0.4em] hover:text-[#FF5C00] transition-all relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#FF5C00] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
        
        <motion.a
          href={`mailto:${portfolio.contact.email}`}
          whileHover={{ x: -10 }}
          className="flex items-center gap-4 group"
        >
          <span className="font-mono text-[9px] text-[#FF5C00] uppercase tracking-widest font-bold">
            Initiate_Collaboration
          </span>

          <div className="w-10 h-[1px] bg-[#FF5C00] group-hover:w-16 transition-all" />
        </motion.a>
      </div>

      {/* Mobile Badge */}
      <div className="md:hidden pointer-events-auto">
        <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </nav>
  );
};
