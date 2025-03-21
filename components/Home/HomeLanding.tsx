'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function HomeLanding() {
  // State to track client-side rendering
  const [isMounted, setIsMounted] = useState(false);
  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Scroll to the next section when the scroll button is clicked
  const scrollToNextSection = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  // Set isMounted to true when component mounts on client
  useEffect(() => {
    setIsMounted(true); 
    
    // Auto-play the video when component mounts
    if (videoRef.current) {
      // Sometimes mobile browsers block autoplay, so we handle it with the play() method
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log("Video autoplay prevented by browser", error);
        }
      };
      
      playVideo();
    }
  }, []);
  
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010E2F] via-[#0A2472] to-[#0E6BA8]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_30%)]" />
        </div>
      </div>
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.07, 
            scale: 1,
            x: [0, -20, 0, 20, 0],
            y: [0, 20, 0, -20, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full border-[40px] border-white"
        />
        
        {/* Square shape */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.1, 
            rotate: 360,
            x: [0, 30, 0, -30, 0],
            y: [0, -30, 0, 30, 0],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] border-[30px] border-[#0E6BA8]"
        />
        
        {/* Small floating circles - pre-defined positions for SSR */}
        {[...Array(5)].map((_, i) => {
          // Pre-defined positions for server rendering
          const positions = [
            { x: [100, 300, 200], y: [200, 100, 300] },
            { x: [500, 200, 400], y: [100, 300, 200] },
            { x: [300, 500, 100], y: [300, 200, 100] },
            { x: [200, 400, 300], y: [150, 250, 350] },
            { x: [400, 100, 500], y: [250, 350, 150] }
          ];
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.15,
                x: positions[i].x,
                y: positions[i].y
              }}
              transition={{ 
                duration: 15 + (i * 5),
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 2
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: `${20 + (i * 10)}px`, 
                height: `${20 + (i * 10)}px`
              }}
            />
          );
        })}
        
        {/* Diagonal lines */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[20%] right-[10%] w-[300px] h-[2px] bg-white rotate-[-30deg]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute top-[25%] right-[5%] w-[200px] h-[2px] bg-white rotate-[-30deg]"
        />
        
        {/* Triangular shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.08,
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[60%] right-[15%]"
        >
          <div className="w-0 h-0 border-left-[100px] border-right-[100px] border-bottom-[173px] border-solid border-transparent border-b-[#0E6BA8]"
               style={{
                 borderLeft: "100px solid transparent",
                 borderRight: "100px solid transparent",
                 borderBottom: "173px solid #0E6BA8"
               }}
          />
        </motion.div>
        
        {/* Pulsing dot */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute left-[15%] bottom-[25%] w-6 h-6 rounded-full bg-white"
        />
        
        {/* New animated hexagon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.12,
            rotate: [0, 60],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[40%] left-[10%]"
          style={{
            width: '120px',
            height: '104px',
            background: '#0E6BA8',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[85vh]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pl-0 sm:pl-4 md:pl-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-vietnam-pro leading-none"
              >
                Building Thriving Communities
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg text-white/90 mb-10 font-vietnam-pro leading-relaxed"
              >
                Advancing tech solutions to build integrated offerings across both digital and physical landscapes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex pb-5"
              >
                <Link href="/about" className="group relative px-8 py-4 bg-transparent text-white rounded-full font-vietnam-pro font-semibold hover:bg-white/10 transition-all duration-300 flex items-center border-2 border-white">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right column - Video in circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white/20 -m-4"></div>
                
                {/* Inner circle with video */}
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-white/10 -m-2"
                ></motion.div>
                
                {/* Video container */}
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden relative">
                  {/* Gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent z-10"></div>
                  
                  {/* Video element */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src="/assets/alfonzo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <button 
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm font-vietnam-pro tracking-wider">Discover More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010E2F] to-transparent z-10" />
    </div>
  );
}