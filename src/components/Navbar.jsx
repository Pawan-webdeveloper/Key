import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonVariants = {
    initial: { y: 0 },
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: {
      scale: 0.95,
      y: 0,
      boxShadow: "0px 1px 1px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 }
    }
  };

  const logoVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: [0, -5, 5, -5, 0], 
      transition: { 
        duration: 0.5,
        ease: "easeInOut" 
      } 
    }
  };

  const navLinkVariants = {
    initial: { y: 0, color: "#FFFFFF" },
    hover: { 
      y: -2, 
      color: "#FBE7F0", 
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const dropdownIconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 180, transition: { duration: 0.3 } }
  };

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <>
      <motion.nav 
        className="flex flex-col justify-center px-16 w-full bg-rose-600 min-h-[72px] max-md:px-5"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="flex flex-wrap gap-8 justify-between items-center w-full">
          {/* Logo */}
          <motion.div 
            className="flex shrink items-start self-stretch my-auto basis-0 min-w-20"
            variants={childVariants}
            whileHover="hover"
            initial="initial"
            animate="visible"
          >
            <motion.div
              className="font-bold text-2xl text-white tracking-tight"
              variants={logoVariants}
              whileHover="hover"
            >
              KeyCafe
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <motion.div 
                className="flex gap-8 items-center self-stretch my-auto text-base text-white"
                variants={childVariants}
              ><Link to="/">
                <motion.span 
                  href="#" 
                  className="gap-1 self-stretch my-auto transition-colors"
                  variants={navLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Home
                </motion.span>
                </Link>
                <Link to="/shop">
                <motion.span
                  href="#" 
                  className="gap-1 self-stretch my-auto transition-colors"
                  variants={navLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Shop Now
                </motion.span>
                </Link>
                <motion.div 
                  className="self-stretch my-auto whitespace-nowrap"
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="flex gap-1 justify-center items-center">
                    <motion.a 
                      href="#" 
                      className="self-stretch my-auto transition-colors"
                      variants={navLinkVariants}
                    >
                      Products
                    </motion.a>
                    {/* <motion.img
                      src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/fda752d4b20b01dbb0e3dc10d54e95f457b6308cbfef41dc018d4ed032865d0f?placeholderIfAbsent=true"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      alt="Dropdown Icon"
                      variants={dropdownIconVariants}
                    /> */}
                  </div>
                </motion.div>
                <motion.a 
                  href="#" 
                  className="gap-1 self-stretch my-auto transition-colors"
                  variants={navLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Contact Us
                </motion.a>
             
              </motion.div>

              <motion.div 
                className="flex gap-4 items-center"
                variants={childVariants}
              >
                <motion.button 
                  className="gap-2 px-5 py-2 bg-pink-200 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Cart
                </motion.button>
                <SignedOut>
                  <Link to="/signup">
                    <motion.button 
                      className="gap-2 px-5 py-2 bg-pink-300 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Sign-up
                    </motion.button>
                  </Link>
                  <Link to="/login">
                    <motion.button 
                      className="gap-2 px-5 py-2 bg-pink-400 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Log In
                    </motion.button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </motion.div>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.div 
              className="flex items-center"
              variants={childVariants}
            >
              <motion.button 
                className="gap-2 px-5 py-2 bg-pink-200 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)] mr-2"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Cart
              </motion.button>
              
              <SignedOut>
                <motion.button
                  onClick={toggleMenu}
                  className="flex flex-col justify-center items-center w-12 h-12 bg-pink-300 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="Toggle menu"
                >
                  <motion.span 
                    className={`block w-6 h-0.5 bg-black mb-1.5 transition-transform`}
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                  <motion.span 
                    className={`block w-6 h-0.5 bg-black transition-opacity`}
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                  <motion.span 
                    className={`block w-6 h-0.5 bg-black mt-1.5 transition-transform`}
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </motion.button>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div 
            className="bg-rose-500 w-full overflow-hidden text-white shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col gap-4 py-4 px-6">
              <motion.a 
                href="#" 
                className="py-2 border-b border-rose-400 hover:bg-rose-600 transition-colors"
                variants={menuItemVariants}
                whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}
              >
                Shop Now
              </motion.a>
              <motion.a 
                href="#" 
                className="py-2 border-b border-rose-400 hover:bg-rose-600 transition-colors"
                variants={menuItemVariants}
                whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}
              >
                About Us
              </motion.a>
              <motion.a 
                href="#" 
                className="py-2 border-b border-rose-400 hover:bg-rose-600 transition-colors"
                variants={menuItemVariants}
                whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}
              >
                Contact Us
              </motion.a>
              <motion.a 
                href="#" 
                className="py-2 border-b border-rose-400 hover:bg-rose-600 transition-colors"
                variants={menuItemVariants}
                whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}
              >
                Products
              </motion.a>
              <motion.div 
                className="flex gap-4 mt-2"
                variants={menuItemVariants}
              >
                <SignedOut>
                  <Link to="/signup" className="w-full">
                    <motion.button 
                      className="w-full gap-2 px-5 py-2 bg-pink-300 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Sign-up
                    </motion.button>
                  </Link>
                  <Link to="/login" className="w-full">
                    <motion.button 
                      className="w-full gap-2 px-5 py-2 bg-pink-400 rounded-xl border-2 border-black border-solid shadow-[0px_2px_2px_rgba(11,3,0,0.15)]"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Log In
                    </motion.button>
                  </Link>
                </SignedOut>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;