import React, { useEffect } from "react";
import Button from "./Button";
import Spline from '@splinetool/react-spline';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Hero = () => {
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  // Variants for child animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Floating animation for 3D model
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  // Button hover effects
  const buttonHoverEffect = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300
    }
  };

  return (
    <section className="flex overflow-hidden flex-wrap gap-5 items-center px-16 w-full bg-rose-600 max-md:px-5 max-md:py-12 max-md:max-w-full relative">
      {/* Background pattern animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute w-full h-full"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"], 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "30px 30px"
          }}
        />
      </motion.div>
      
      {/* Text content with staggered animations */}
      <motion.div 
        className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full z-0"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="w-full text-white max-md:max-w-full z-0">
          <motion.h1 
            className="text-6xl tracking-tight leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] z-0"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Discover
            </motion.span>{" "}
            <motion.span 
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Perfect
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Keyboard Experience
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Today
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-7 max-md:max-w-full"
            variants={itemVariants}
          >
            Explore our innovative range of keyboards designed for every type of
            user. Elevate your typing experience with cutting-edge technology
            and sleek designs.
          </motion.p>
        </div>
        
        <motion.div 
          className="flex gap-4 items-start self-start mt-8 text-base font-medium text-black"
          variants={itemVariants}
        ><SignedIn>
          <Link to='/shop'>
          <motion.div whileHover={buttonHoverEffect} whileTap={{ scale: 0.95 }}>
            <Button variant="primary">Shop</Button>
          </motion.div>
          </Link>
          </SignedIn>
          <motion.div whileHover={buttonHoverEffect} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* 3D model with animations */}
      <motion.div 
        className="relative flex-1 shrink self-stretch rounded-lg basis-0 min-w-60 max-md:max-w-full z-10 overflow-visible"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        {/* Glowing effect behind the model */}
        <motion.div 
          className="absolute inset-0 bg-pink-400 rounded-full filter blur-3xl opacity-20 -z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* The Spline 3D model */}
        <motion.div 
          className="h-full"
          animate={floatingAnimation}
        >
          <Spline 
            scene="https://prod.spline.design/Bm4HO6-Id7mHqKFd/scene.splinecode" 
            className="object-contain w-full rounded-lg aspect-[0.95] min-w-60 max-md:max-w-full" 
          />
        </motion.div>
        
        {/* Particle effects */}
        <AnimatePresence>
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-pink-200 rounded-full"
              initial={{ 
                opacity: 0,
                x: "50%",
                y: "50%"
              }}
              animate={{ 
                opacity: [0, 0.8, 0],
                x: `${50 + (Math.random() * 80 - 40)}%`,
                y: `${50 + (Math.random() * 80 - 40)}%`,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Hero;