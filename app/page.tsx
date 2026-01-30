"use client";

import React, { useEffect } from 'react';
// Data and Components
import { portfolio } from "../content/data";
import { Navigation } from '../component/Navigation';
import { Hero } from '../component/Hero';
import { ProjectGrid } from '../component/ProjectGrid';
import { ProcessSection } from '../component/ProcessSection';
import { GrainOverlay } from '../component/GrainOverlay';
import { CustomCursor } from '../component/CustomCursor';
import { ImageWithFallback } from '../component/figma/ImageWithFallback';

// Styles
import '@/styles/fonts.css';
import '@/styles/portfolio.css';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on refresh
    window.scrollTo(0, 0);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white selection:bg-[#FF5C00] selection:text-white relative overflow-x-hidden">
      <CustomCursor />
      <GrainOverlay />
      <Navigation />
      
      <div className="relative z-10">
        {/* HERO - Dynamic Name */}
        <Hero designerName={portfolio.name.toUpperCase()} />
        
        <div id="process" className="relative">
          <ProcessSection />
        </div>
        
        <div id="archive" className="relative">
          <div className="absolute top-0 left-8 md:left-16 h-full w-[1px] bg-[#333333] hidden md:block" />
          <ProjectGrid />
        </div>
        
        {/* REVIEWS SECTION - Industrial Auto-Scroll */}
        <section className="py-24 border-t border-[#333333] bg-[#1A1A1A] overflow-hidden">
          <div id="reviews" className="px-8 md:px-16 mb-12">
            <span className="font-mono text-[10px] text-[#FF5C00] tracking-[0.3em] uppercase">Validation_Archive</span>
          </div>
          
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {/* We map twice to create a seamless infinite loop */}
            {[...portfolio.reviews, ...portfolio.reviews].map((rev, i) => (
              <div 
                key={i} 
                className="inline-block min-w-[350px] md:min-w-[500px] p-10 border border-[#333333] rounded-[24px] bg-[#1d1d1d]/50 backdrop-blur-sm"
              >
                <p className="font-mono text-xs text-[#FF5C00] mb-4 tracking-widest uppercase">
                  [ {rev.author || "CLIENT_VERIFIED"} ]
                </p>
                <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-white leading-tight mb-8 whitespace-normal italic">
                  "{rev.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#FF5C00]" />
                  <span className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-widest">
                    {rev.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About / Manifesto Section */}
        <section className="py-32 px-8 md:px-16 border-t border-[#333333] bg-[#1A1A1A] grid grid-cols-1 md:grid-cols-2 gap-16">
          <div id="manifesto" className="flex flex-col justify-center">
            <h2 className="font-[var(--font-heading)] text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8 leading-none">
              Designer <span className="text-[#FF5C00]">Creator</span><br />Story Teller.
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="font-mono text-sm text-[#8A8A8A] leading-relaxed uppercase">
                {portfolio.about}
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-[#333333] cursor-grab active:cursor-grabbing group">
            <ImageWithFallback
              src="/images/potrait.jpeg" // Ensure this exists in public/images
              alt={`${portfolio.name} - Portrait`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-[10px] text-[#FF5C00] tracking-widest uppercase mb-2 block">Delhi | Mumbai</span>
              <span className="font-[var(--font-heading)] text-2xl text-white uppercase">{portfolio.title}</span>
            </div>
          </div>
        </section>
        
        {/* Footer / Contact Section */}
        <section className="p-8 md:p-16 border-t border-[#333333] bg-[#1A1A1A] relative overflow-hidden">
          {/* Background Text Overlay - Using First Name from Data */}
          <div className="absolute bottom-[-5%] left-[-2%] font-[var(--font-heading)] text-[20vw] text-white/[0.02] font-black pointer-events-none select-none uppercase tracking-tighter leading-none">
            {portfolio.name.split(' ')[0]}
          </div>

          <div className="max-w-l mx-auto py-32 text-center relative z-10">
            <h2 className="font-[var(--font-heading)] text-6xl md:text-[9rem] text-white uppercase tracking-tighter leading-[0.85] mb-16">
              Luxury, sharpened<br />
              <span className="text-[#FF5C00]">by individuality.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <a 
                href={`mailto:${portfolio.contact.email}`}
                className="group relative inline-flex items-center justify-center px-12 py-7 overflow-hidden font-mono font-bold uppercase tracking-[0.2em] text-white bg-transparent border-2 border-[#FF5C00] rounded-[32px] transition-all hover:bg-[#FF5C00]"
              >
                <span className="relative z-10 text-sm">Initiate Project</span>
              </a>
              
              <div className="text-left font-mono text-[#8A8A8A] text-[10px] uppercase tracking-[0.2em] leading-loose">
                [ CURRENT_STATUS: ACCEPTING_CLIENTS ]<br />
                [ EXPERIENCE: {portfolio.status?.experience || "2 YEARS"} ]<br />
                [ LOCATION: {portfolio.status?.location || "REMOTE / WORLDWIDE"} ]
              </div>
            </div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <div className="font-[var(--font-heading)] text-2xl text-white font-bold tracking-tighter uppercase">
                {portfolio.name.split(' ').map(n => n[0]).join('')}<span className="text-[#FF5C00]">.</span>
              </div>
              <div className="font-mono text-[9px] text-[#555555] uppercase tracking-widest">
                © 2026 {portfolio.name.toUpperCase()} / GOLDEN SNEAKER MAKER
              </div>
            </div>
            
            <div className="flex gap-12">
              <a href={portfolio.contact.instagram} className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-[0.3em] hover:text-[#FF5C00] transition-colors relative group">
                Instagram
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF5C00] transition-all group-hover:w-full" />
              </a>
              <a href={portfolio.contact.linkedin} className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-[0.3em] hover:text-[#FF5C00] transition-colors relative group">
                LinkedIn
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF5C00] transition-all group-hover:w-full" />
              </a>
            </div>
            {/*
            <div className="font-mono text-[9px] text-[#555555] uppercase tracking-widest text-right">
              SYSTEM_HEARTBEAT: ACTIVE<br />
              BUILD_REF: ARCHIVE_V1.0.4
            </div>
            */}
          </div>
        </section>
      </div>

      {/* Grid Overlay (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-overlay">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
    </main>
  );
};

export default App;