"use client";

import confetti from "canvas-confetti";
import * as React from "react";

const Star = ({ className }: { className: string }) => {

  const handleClick = () => {
    const end = Date.now() + 0.5 * 200;
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
        onClick={handleClick}
        className="hover:cursor-pointer dark:hover:fill-zinc-300 dark:fill-zinc-500 transition-all"
        id="star"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M772.727 510.49C1000 1000 1000 1000 1300.7 524.476 1000 1000 1000 1000 1423.077 1709.79 1000 1000 1000 1000 692.307 1125.874 1000 1000 1000 1000 772.728 510.49"
      ></path>
    </svg>
  );
};

export default Star;
