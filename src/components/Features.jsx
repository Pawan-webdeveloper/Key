import React, { useEffect } from "react";
import FeatureCard from "./FeatureCard";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { button } from "framer-motion/client";

const Features = () => {
  const features = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/3eb6012450de9bf023168b9b543b3aa25c616ce6c2681e44ae5a877342cb446a?placeholderIfAbsent=true",
      title: "Illuminate Your Workspace with Style",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        button : "BUY NOW",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/a39064cd900e884577cf7feca40415dc95a9b2f9b6971bff20463bfbf9758d28?placeholderIfAbsent=true",
      title: "Comfort Meets Functionality in Every Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        button : "BUY NOW",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/69663fd0c199e40491bc9060cab96a6c779bff7e23e3964ec4305eb544dd6c17?placeholderIfAbsent=true",
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        button : "BUY NOW",
    },
  ];

  // Animation controls
  const headerControls = useAnimation();
  const featuresControls = useAnimation();
  const buttonsControls = useAnimation();

  // Intersection observers
  const [headerRef, headerInView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [buttonsRef, buttonsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
    if (featuresInView) {
      featuresControls.start("visible");
    }
    if (buttonsInView) {
      buttonsControls.start("visible");
    }
  }, [headerInView, featuresInView, buttonsInView, headerControls, featuresControls, buttonsControls]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const backgroundVariants = {
    initial: { 
      backgroundPosition: "0% 50%",
    },
    animate: { 
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  // Enhanced FeatureCard with animations
  const AnimatedFeatureCard = ({ feature, index }) => {
    const [cardRef, cardInView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    const cardControls = useAnimation();

    useEffect(() => {
      if (cardInView) {
        cardControls.start("visible");
      }
    }, [cardInView, cardControls]);

    return (
      <motion.div
        ref={cardRef}
        custom={index}
        initial="hidden"
        animate={cardControls}
        variants={featureCardVariants}
        whileHover={{ 
          y: -10, 
          transition: { duration: 0.3 } 
        }}
        className="flex flex-col flex-1 items-center px-5 pt-6 pb-8 bg-white rounded-2xl border border-stone-300 border-solid basis-0 min-w-80"
      >
        <motion.img
          src={feature.image}
          alt={feature.title}
          className="self-stretch w-full aspect-[1.33]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.h3 
          className="mt-6 text-xl font-medium leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          className="mt-2 text-base leading-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {feature.description}
        </motion.p>
        <motion.div className="flex items-center justify-center w-full mt-6">
        <Button className="w-[125px] p-3  ">{feature.button}</Button>
        </motion.div>
      </motion.div>
    );
  };

  // Enhanced Button with animations
  const AnimatedButton = ({ variant, rightIcon, children, index }) => {
    return (
      <motion.div
        custom={index}
        initial="hidden"
        animate={buttonsControls}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Button variant={variant} rightIcon={rightIcon}>
          {children}
        </Button>
      </motion.div>
    );
  };

  return (
    <motion.section 
      className="flex overflow-hidden flex-col items-center px-16 py-28 w-full text-black bg-pink-200 max-md:px-5 max-md:py-24 max-md:max-w-full"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
      style={{
        backgroundImage: "linear-gradient(120deg, #fbe2e9 0%, #f9c9db 50%, #fbe2e9 100%)",
        backgroundSize: "200% 200%"
      }}
    >
      <motion.div 
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={headerVariants}
        className="flex flex-col max-w-full text-center w-[768px]"
      >
        {/* <motion.p 
          variants={childVariants}
          className="self-center text-base font-bold whitespace-nowrap"
        >
          Features
        </motion.p> */}
        <motion.div 
          variants={childVariants}
          className="mt-4 w-full max-md:max-w-full"
        >
          <motion.h2 
            variants={childVariants}
            className="text-5xl tracking-tight leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
          >
            Discover Our Premium Keyboard Offerings
          </motion.h2>
          <motion.p 
            variants={childVariants}
            className="mt-6 text-lg leading-7 max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        ref={featuresRef}
        className="self-stretch mt-20 w-full text-center max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex flex-wrap gap-10 justify-center items-start w-full max-md:max-w-full">
          {features.map((feature, index) => (
            <AnimatedFeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        ref={buttonsRef}
        className="flex gap-6 items-center mt-20 text-base font-medium text-black max-md:mt-10"
      >
        <AnimatedButton variant="secondary" index={0}>
          Shop
        </AnimatedButton>
        <AnimatedButton
          variant="link"
          rightIcon="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/4c1170d4964fdf0e1937b9597af704d9c2d213c3b1e6099dc32a73d304e5f2ce?placeholderIfAbsent=true"
          index={1}
        >
          Learn More
        </AnimatedButton>
      </motion.div>
    </motion.section>
  );
};

export default Features;