"use client";

import confetti from "canvas-confetti";
import * as React from "react";
import { useState } from "react";

const Star = ({ className }: { className: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const end = Date.now() + 0.5 * 1000;
    const colors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 1,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 1,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="692.31 510.49 730.77 1199.3"
      className={className}
    >
      <path
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="hover:cursor-pointer hover:fill-zinc-700 fill-zinc-800 transition-all"
        id="star"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M772.727 510.49C1000 1000 1000 1000 1300.7 524.476 1000 1000 1000 1000 1423.077 1709.79 1000 1000 1000 1000 692.307 1125.874 1000 1000 1000 1000 772.728 510.49"
      ></path>
    </svg>
  );
};

export default Star;
