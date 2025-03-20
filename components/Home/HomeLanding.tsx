'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export default function HomeLanding() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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
        
        {/* Small floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{ 
              opacity: 0.15,
              x: [
                Math.random() * window.innerWidth * 0.8,
                Math.random() * window.innerWidth * 0.8,
                Math.random() * window.innerWidth * 0.8
              ],
              y: [
                Math.random() * window.innerHeight * 0.8,
                Math.random() * window.innerHeight * 0.8,
                Math.random() * window.innerHeight * 0.8
              ]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 2
            }}
            className={`absolute w-${Math.floor(10 + Math.random() * 20)} h-${Math.floor(10 + Math.random() * 20)} rounded-full bg-white`}
            style={{
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`
            }}
          />
        ))}
        
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
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pl-0 sm:pl-4 md:pl-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 font-vietnam-pro leading-none whitespace-nowrap"
            >
              Building Thriving Communities
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-white/90 mb-6 font-vietnam-pro leading-relaxed max-w-xl"
            >
              We are on a mission to build and sustain an ecosystem of thriving businesses and visionary brands,
              where like-minded individuals come together to flourish in a vibrant community dedicated to success.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-white/80 mb-10 font-vietnam-pro leading-relaxed max-w-xl"
            >
              Join us in creating a future where collaboration and innovation drive success for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 bg-white text-[#010E2F] rounded-full font-vietnam-pro font-semibold hover:bg-white/90 transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Play Video Demo
                <div className="absolute inset-0 rounded-full border-2 border-white -m-0.5 group-hover:scale-105 transition-transform duration-300" />
              </button>
              
              <button className="group relative px-8 py-4 bg-transparent text-white rounded-full font-vietnam-pro font-semibold hover:bg-white/10 transition-all duration-300 flex items-center border-2 border-white">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010E2F] to-transparent z-10" />
    </div>
  );
}