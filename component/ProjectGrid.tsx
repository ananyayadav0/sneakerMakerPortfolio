import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../component/figma/ImageWithFallback';

interface Project {
  id: number;
  finalImg: string;
  sketchImg: string;
  className: string;
}

const projects: Project[] = [
  {
    id: 1,
    finalImg: "/images/img2.jpeg",
    sketchImg: "/images/img3.jpeg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 2,
    finalImg: "/images/img7.jpeg",
    sketchImg: "/images/img12.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    finalImg: "/images/img13.jpeg",
    sketchImg: "/images/img11.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    finalImg: "/images/img10.jpeg",
    sketchImg: "/images/img14.jpeg",
    className: "md:col-span-2 md:row-span-1",
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`relative group overflow-hidden rounded-[32px] border border-[#333333] bg-[#1A1A1A] ${project.className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Image: Desaturates and scales on hover */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={project.finalImg}
          alt="Product View"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isHovered ? 'scale-110 opacity-20 grayscale' : 'scale-100 opacity-90'
          }`}
        />
      </div>

      {/* Sketch Overlay: The blueprint reveals here */}
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 p-1 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <ImageWithFallback
                src={project.sketchImg}
                alt="Process Sketch"
                className="max-w-[85%] max-h-[85%] object-contain mix-blend-screen opacity-80 brightness-100"
              />
              
              {/* Technical Blueprint Frame */}
              <div className="absolute inset-0 border-[1px] border-white/10 m-2 rounded-[20px]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="absolute top-6 right-6 z-20">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-[#FF5C00] group-hover:border-[#FF5C00] transition-all duration-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectGrid: React.FC = () => {
  return (
    <section className="p-8 md:p-20 bg-[#1A1A1A]">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-[#333333] pb-10">
        <h3 className="font-[var(--font-heading)] text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
          Visual<br />
          <span className="text-[#FF5C00]">Archive.</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px] md:auto-rows-[500px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};