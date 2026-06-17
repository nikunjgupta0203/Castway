import React from "react";
import Navbar from "./components/Navbar";
import {
  Hero,
  Positioning,
  WhatWeDo,
  Problem,
  Belief,
  Differentiation,
  Contact,
  Footer,
} from "./components/Sections";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#0A0A0A] selection:text-[#F2E8DC] overflow-x-hidden">
      {/* Premium background grid mesh overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5d9c9_1px,transparent_1px),linear-gradient(to_bottom,#e5d9c9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Top sticky logo navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Positioning />
        <WhatWeDo />
        <Problem />
        <Belief />
        <Differentiation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
