import React, { useState, useEffect } from "react";
import { Phone, Instagram } from "lucide-react";
import HexagonLogo from "./HexagonLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#F2E8DC]/85 backdrop-blur-md border-b border-[#D9CFC2]/40 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo & Wordmark */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 cursor-pointer group text-left"
          aria-label="Scroll to top"
        >
          <HexagonLogo className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-serif text-xl md:text-2xl font-semibold text-[#0A0A0A] tracking-tight lowercase">
            castway
          </span>
        </button>

        {/* Right: Quick CTA actions */}
        <div className="flex items-center gap-5 md:gap-6">
          <a
            href="tel:+919654196728"
            className="p-2.5 rounded-full hover:bg-[#0A0A0A]/5 text-[#5C5C5C] hover:text-[#0A0A0A] transition-all duration-300 flex items-center justify-center"
            title="Call Castway to enquire"
            aria-label="Call Castway to enquire"
          >
            <Phone size={19} className="stroke-[1.75]" />
          </a>
          <a
            href="https://www.instagram.com/castway.in?igsh=ZHB5dmQ4Mm9ucTJm&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-[#0A0A0A]/5 text-[#5C5C5C] hover:text-[#0A0A0A] transition-all duration-300 flex items-center justify-center"
            title="Visit Castway Instagram"
            aria-label="Visit Castway Instagram"
          >
            <Instagram size={19} className="stroke-[1.75]" />
          </a>
        </div>
      </div>
    </nav>
  );
}
