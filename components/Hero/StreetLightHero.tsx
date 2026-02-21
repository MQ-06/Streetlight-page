'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Simple utility to create an array of random particles
const particles = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100, // percentage
  y: Math.random() * 100, // percentage
  size: Math.random() * 3 + 1, // px
  duration: Math.random() * 10 + 10, // seconds
  delay: Math.random() * 5, // seconds
}));

const StreetLightHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth initial render before starting the heavy sequence
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!isLoaded) return <div className="min-h-screen bg-background" />;

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary/30 selection:text-primary">
      {/* Background Image with Darkness Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/images/dark-road.png)`,
          backgroundPosition: 'center center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#05050A]/90" />
      
      {/* Film Grain Texture for Cinematic Feel */}
      <div className="film-grain absolute inset-0 z-50 pointer-events-none" />

      {/* Streetlight Pole and Head */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full h-[15vh]">
        {/* The Pole */}
        <div className="w-[3px] h-[80%] bg-zinc-800" />
        {/* The Light Head */}
        <div className="w-16 h-3 bg-zinc-800 rounded-b-full shadow-2xl relative">
           {/* The Bulb Glow (flickering on) */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ 
               opacity: [0, 0.1, 0, 0.8, 0.2, 1],
               scale: [1, 1.2, 1, 1.5, 1.1, 1]
             }}
             transition={{ 
               duration: 0.8, 
               times: [0, 0.2, 0.4, 0.6, 0.8, 1], 
               delay: 0.5,
               ease: "easeOut"
             }}
             className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-4 bg-primary rounded-full blur-[4px]"
           />
        </div>
      </div>

      {/* The Light Beam */}
      <div className="absolute inset-0 z-10 flex justify-center overflow-hidden pt-[15vh]">
        <motion.div
          initial={{ opacity: 0, height: "0%" }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ 
            duration: 3, 
            delay: 1.2, 
            ease: [0.25, 0.1, 0.25, 1] // Custom cubic bezier for smooth reveal
          }}
          className="light-beam w-full max-w-[1200px] origin-top"
        >
          {/* Dust Particles inside the beam */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: `${p.y}%`, x: `${p.x}%`, opacity: 0 }}
              animate={{ 
                y: [`${p.y}%`, `${p.y - 20}%`], 
                x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`],
                opacity: [0, Math.random() * 0.5 + 0.3, 0]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear"
              }}
              className="absolute bg-primary rounded-full blur-[1px]"
              style={{
                width: p.size,
                height: p.size,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content Container (Revealed by light) */}
      <div className="relative z-20 h-screen flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 
            data-testid="text-headline"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFFDF8] glow-text leading-[1.1] mb-8"
          >
            No Civic Hazard Should<br className="hidden md:block" /> Remain in the Dark.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 3.8, ease: "easeOut" }}
          className="mt-4"
        >
          <p 
            data-testid="text-subtext"
            className="text-sm md:text-base font-light text-primary/60 tracking-[0.3em] uppercase mb-16 flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-8 bg-primary/30" />
            Built in Pakistan. Built for Pakistan.
            <span className="h-[1px] w-8 bg-primary/30" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button 
            data-testid="button-primary"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md shadow-[0_0_20px_rgba(244,185,66,0.4)] hover:shadow-[0_0_30px_rgba(244,185,66,0.6)] transition-shadow duration-300 tracking-wide"
          >
            Coming Soon
          </button>
          <button 
            data-testid="button-secondary"
            className="px-8 py-4 bg-transparent text-primary border border-primary/40 hover:bg-primary/5 hover:border-primary transition-colors duration-300 font-medium rounded-md tracking-wide"
          >
            Learn More
          </button>
        </motion.div>
      </div>
      
      {/* Ground Reflection */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3, delay: 3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[60px] rounded-[100%] z-10 pointer-events-none"
      />
    </main>
  );
};

export default StreetLightHero;
