import React from "react";
import { Handshake, Compass, FileText, TrendingUp, Award, Phone, Instagram, X } from "lucide-react";
import { motion } from "motion/react";
import HexagonLogo from "./HexagonLogo";
import SectionWrapper from "./SectionWrapper";

// Custom bullet component referencing the black hexagon motif
function BulletHexagon() {
  return (
    <svg viewBox="0 0 100 100" className="w-2 h-2 mt-2 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="25,5 75,5 100,50 75,95 25,95 0,50" fill="#0A0A0A" />
    </svg>
  );
}

// Crisp thin divider line styled matching the "Bold Typography" theme (#D9CFC2)
function Divider() {
  return (
    <div className="w-full max-w-lg h-[1.5px] bg-[#D9CFC2] mx-auto my-7 md:my-9" />
  );
}

/* ==========================================
   2. HERO SECTION
   ========================================== */
export function Hero() {
  return (
    <SectionWrapper className="pt-28 md:pt-44 pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Hexagon logo mark at top */}
        <div className="flex justify-center mb-6">
          <HexagonLogo className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        {/* Wordmark lowercase serif */}
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#0A0A0A] tracking-tight lowercase mb-1">
          castway
        </h1>

        {/* Small tracked out tagline label (matched to .label class) */}
        <p className="font-sans text-[10px] md:text-xs font-semibold text-[#5C5C5C] uppercase tracking-[0.18em] mb-12">
          MANAGEMENT · PARTNERSHIPS · GROWTH
        </p>

        {/* Large serif display title */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0A0A0A] font-bold leading-[1.08] tracking-tight mb-8">
          Building careers.<br />
          <span className="italic block mt-1 font-serif">Building legacies.</span>
        </h2>

        <Divider />

        {/* Intro copy */}
        <p className="font-sans text-base md:text-xl text-[#5C5C5C] max-w-xl mx-auto leading-relaxed font-light mb-8">
          A new kind of creator management company, designed for the future of creators.
        </p>

        <p className="font-sans text-base md:text-lg text-[#0A0A0A] font-bold tracking-tight">
          Welcome to Castway.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   3. POSITIONING SECTION
   ========================================== */
export function Positioning() {
  return (
    <SectionWrapper className="py-20 md:py-28 border-y border-[#D9CFC2] bg-[#F2E8DC]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <HexagonLogo className="w-10 h-10" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-snug">
          More than management.
        </h2>

        <Divider />

        <p className="font-sans text-base sm:text-lg md:text-xl text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed mb-8 font-light">
          We help creators grow, monetize, and build long-term careers.
        </p>

        <p className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.18em] text-[#5C5C5C] uppercase">
          STRATEGY · PARTNERSHIPS · GROWTH
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   4. WHAT WE DO SECTION
   ========================================== */
export function WhatWeDo() {
  const services = [
    {
      icon: <Handshake className="w-5 h-5 text-[#0A0A0A] stroke-[1px]" />,
      char: "P",
      title: "Brand Partnerships",
      desc: "Lucrative opportunities aligned with your unique creative style and audience values."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#0A0A0A] stroke-[1px]" />,
      char: "S",
      title: "Creator Strategy",
      desc: "Tailored content positioning and long-term channel optimization for maximum reach."
    },
    {
      icon: <FileText className="w-5 h-5 text-[#0A0A0A] stroke-[1px]" />,
      char: "N",
      title: "Negotiation & Deal Management",
      desc: "Expert contract protection ensuring your interests are secured with top industry margins."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#0A0A0A] stroke-[1px]" />,
      char: "R",
      title: "Revenue Growth",
      desc: "Diversifying your income through intellectual property, merchandise, and digital products."
    },
    {
      icon: <Award className="w-5 h-5 text-[#0A0A0A] stroke-[1px]" />,
      char: "I",
      title: "Long-Term Career Building",
      desc: "Transitioning your influence from momentary virality into a resilient and lasting media enterprise."
    }
  ];

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.0] }
    }
  };

  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight text-center md:text-left mb-4">
          What we do.
        </h2>
        <div className="font-sans text-[10px] md:text-xs font-semibold text-[#5C5C5C] uppercase tracking-[0.18em] mb-10 text-center md:text-left">
          STRATEGY · EXECUTION · PROTECTION
        </div>

        {/* Services List with thin divider lines */}
        <motion.div 
          className="border-t border-[#D9CFC2] mb-12"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#D9CFC2] gap-4 md:gap-8 transition-colors duration-300 hover:bg-[#D9CFC2]/25 px-3"
            >
              <div className="flex items-center gap-5">
                {/* Elegant icon circle matching the .icon-box style from the Bold Typography theme */}
                <div className="w-10 h-10 rounded-full border border-[#0A0A0A] bg-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A0A0A] group-hover:text-[#F2E8DC] shrink-0 font-serif font-bold text-sm">
                  <span className="transition-all duration-300 group-hover:text-[#F2E8DC] text-[#0A0A0A] flex items-center justify-center">
                    {item.char}
                  </span>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-[#0A0A0A]">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-xs md:text-sm text-[#5C5C5C] max-w-md md:text-left font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered Closing Statement */}
        <div className="text-center mt-12 bg-[#EDE3D6]/40 py-6 px-4 border border-[#D9CFC2] rounded">
          <p className="font-serif text-base md:text-lg text-[#0A0A0A] italic font-medium leading-relaxed">
            "We handle the business side so creators can focus on creating."
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   5. PROBLEM SECTION / leave money on the table
   ========================================== */
export function Problem() {
  const painPoints = [
    {
      title: "No proper negotiation",
      desc: "Lower fees"
    },
    {
      title: "Limited brand access",
      desc: "Fewer opportunities"
    },
    {
      title: "No long-term strategy",
      desc: "Stagnant growth"
    },
    {
      title: "No business guidance",
      desc: "Missed potential"
    }
  ];

  return (
    <SectionWrapper className="py-20 md:py-28 border-y border-[#D9CFC2] bg-[#FAF6F0]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline with on the table in italic serif */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight text-center mb-16 max-w-3xl mx-auto">
          Why most creators leave money <br className="hidden sm:inline" />
          <span className="font-serif italic font-medium">on the table.</span>
        </h2>

        {/* Grid layout for pain points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-14">
          {painPoints.map((point, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* Elegant grey × marker with absolute matching color theme */}
              <div className="text-[#D9CFC2] text-2xl font-semibold leading-none mr-2 select-none">
                &times;
              </div>
              <div>
                <h3 className="font-sans text-base font-bold text-[#0A0A0A]">
                  {point.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#5C5C5C] leading-relaxed font-light mt-0.5">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line below */}
        <div className="text-center pt-8 border-t border-[#D9CFC2]">
          <p className="font-serif text-xl md:text-2xl text-[#0A0A0A] tracking-tight uppercase font-bold">
            You create. <span className="font-sans font-light text-[#5C5C5C] lowercase">We maximize.</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   6. BELIEF SECTION
   ========================================== */
export function Belief() {
  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <HexagonLogo className="w-10 h-10" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-6">
          The future belongs to creators.
        </h2>

        <Divider />

        <p className="font-sans text-base md:text-xl text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed mb-6 font-light">
          We believe creators are becoming the next generation of entrepreneurs, media companies, and brands.
        </p>

        <p className="font-sans text-base md:text-lg text-[#0A0A0A] font-bold tracking-tight mb-8">
          Castway exists to help them get there.
        </p>

        <p className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#5C5C5C] uppercase max-w-lg mx-auto">
          BUILDING THE INFRASTRUCTURE BEHIND CREATOR SUCCESS.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   7. DIFFERENTIATION SECTION
   ========================================== */
export function Differentiation() {
  return (
    <SectionWrapper className="py-20 md:py-28 border-y border-[#D9CFC2] bg-[#EDE3D6]/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <HexagonLogo className="w-10 h-10" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight mb-6">
          Creators deserve better representation.
        </h2>

        <Divider />

        <div className="space-y-3 mb-6">
          <p className="font-sans text-base md:text-lg text-[#5C5C5C] font-light">
            Most creators focus on content.
          </p>
          <p className="font-sans text-base md:text-lg text-[#5C5C5C] font-light">
            Most managers focus on deals.
          </p>
        </div>

        <p className="font-serif text-xl md:text-2xl text-[#0A0A0A] font-bold tracking-tight my-6">
          We focus on building careers.
        </p>

        <p className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#5C5C5C] uppercase">
          WELCOME TO A DIFFERENT APPROACH.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   8. CALL TO ACTION / CONTACT
   ========================================== */
export function Contact() {
  const points = [
    "Grow their audience",
    "Secure better partnerships",
    "Build sustainable income streams"
  ];

  return (
    <SectionWrapper id="contact" className="py-24 md:py-32 bg-[#FAF6F0]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <HexagonLogo className="w-12 h-12 md:w-14 md:h-14" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-6">
          Now accepting creators.
        </h2>

        <Divider />

        <p className="font-sans text-base md:text-lg text-[#5C5C5C] max-w-xl mx-auto leading-relaxed mb-8 font-light">
          We're looking to work with ambitious creators who want to:
        </p>

        {/* Elegant Hexagon Custom Bullet List */}
        <div className="inline-block text-left max-w-md mx-auto mb-16 space-y-4">
          {points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <BulletHexagon />
              <span className="font-sans text-sm md:text-base text-[#0A0A0A] font-light">
                {pt}
              </span>
            </div>
          ))}
        </div>

        {/* Prominent clickable contact button blocks - Styled absolutely according to the "Bold Typography" design theme */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto mb-16">
          {/* Phone Link Button */}
          <a
            href="tel:+919654196728"
            className="w-full border border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F2E8DC] transition-all duration-300 rounded px-6 py-4 flex items-center justify-center gap-3 font-semibold text-sm cursor-pointer select-none active:scale-[0.99] focus:outline-none"
            aria-label="Call to enquire"
          >
            <Phone className="w-4 h-4 stroke-[2px]" />
            <span>Enquire Now</span>
          </a>

          {/* Instagram Link Button */}
          <a
            href="https://www.instagram.com/castway.in?igsh=ZHB5dmQ4Mm9ucTJm&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F2E8DC] transition-all duration-300 rounded px-6 py-4 flex items-center justify-center gap-3 font-semibold text-sm cursor-pointer select-none active:scale-[0.99] focus:outline-none"
            aria-label="Message us on Instagram"
          >
            <Instagram className="w-4 h-4 stroke-[2px]" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Closing line below the buttons */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#0A0A0A] italic font-medium">
          Let's build something big together.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* ==========================================
   9. FOOTER SECTION
   ========================================== */
export function Footer() {
  return (
    <footer className="py-12 bg-[#FAF6F0] border-t border-[#D9CFC2]">
      <div className="max-w-6xl mx-auto px-6 text-center text-[10px] md:text-xs font-semibold text-[#5C5C5C] tracking-[0.15em] uppercase">
        <p>© 2026 CASTWAY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
