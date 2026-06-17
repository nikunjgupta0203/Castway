import React from "react";

interface HexagonLogoProps {
  className?: string;
  size?: number | string;
}

export default function HexagonLogo({ className = "w-10 h-10" }: HexagonLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} select-none transition-transform duration-300 hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Castway CW Logo"
    >
      {/* Precision flat-top regular hexagon points */}
      <polygon
        points="25,5 75,5 100,50 75,95 25,95 0,50"
        fill="#0A0A0A"
      />
      {/* Elegantly centered Playfair Display serif typography */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#F2E8DC"
        fontSize="34"
        fontWeight="bold"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="-1.5"
      >
        CW
      </text>
    </svg>
  );
}
