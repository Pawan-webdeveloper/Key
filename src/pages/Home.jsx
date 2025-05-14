"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}

export default Home;
