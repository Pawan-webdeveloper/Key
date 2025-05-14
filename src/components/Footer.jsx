import React from "react";
import FooterLinks from "./FooterLinks";
import NewsletterForm from "./NewsletterForm";
import { motion, AnimatePresence } from "framer-motion";
const Footer = () => {
  const quickLinks = ["Home Page", "Shop Now", "Contact Us", "About Us", "FAQ"];
  const supportLinks = [
    "Shipping Info",
    "Returns",
    "Warranty",
    "Track Order",
    "Gift Cards",
  ];
  const socialLinks = [
    "Facebook",
    "Twitter",
    "Instagram",
    "YouTube",
    "LinkedIn",
  ];

  return (
    <footer className="overflow-hidden px-5 sm:px-16 py-10 sm:py-20 w-full bg-pink-100">
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10 items-start p-6 sm:p-12 w-full bg-pink-200 rounded-lg border border-solid border-black border-opacity-10">
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10 items-start w-full sm:flex-1 sm:basis-0 sm:min-w-60">
          <div className="flex overflow-hidden flex-col items-start sm:flex-1 sm:basis-0">
            <motion.div 
                     className="flex shrink items-start self-stretch my-auto basis-0 min-w-20"
                    
                     whileHover="hover"
                     initial="initial"
                     animate="visible"
                   >
                     <motion.div
                       className="font-bold text-2xl text-black tracking-tight"
                       
                       whileHover="hover"
                     >
                       KeyCafe
                     </motion.div>
                   </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:flex sm:flex-row gap-8 sm:gap-10 w-full">
            <FooterLinks title="Quick Links" links={quickLinks} />
            <FooterLinks title="Support Links" links={supportLinks} />
            <FooterLinks title="Stay Connected" links={socialLinks} />
          </div>
        </div>
        <div className="hidden sm:block">
          <NewsletterForm />
        </div>
      </div>
      <div className="mt-8 w-full">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-between items-center sm:items-start w-full">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-sm text-black text-center sm:text-left">
            <p className="my-auto">
              © 2025 Relume. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href="#"
                className="underline decoration-auto decoration-solid underline-offset-auto"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="underline decoration-auto decoration-solid underline-offset-auto"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="underline decoration-auto decoration-solid underline-offset-auto"
              >
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-start justify-center sm:justify-start mt-4 sm:mt-0">
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/bd5d4f2627bfab8ef47cb6492bd37455df03c5f2b397133d129f11705a895449?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="Facebook"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/a49a2aed0f85690ab7b1e12d86bc6953310fb27f0205279955955b557365260b?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="Twitter"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/1efa298f4f706ed2b29fe9523f64bccab006d1842f0221d7b80842b4a6622c34?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/f641588937391e300ec7c286fa0b19afd5244c05dbcfc25bb1a7759fdc0753b4?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="YouTube"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/0b93405de15cb184e88934e18dcf5f52a0116e9056aae81ad0ec3ab45e098b96?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;