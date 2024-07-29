import React from "react";

function NoImageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.265 15.938l-1.718-1.703c-.789-.783-1.184-1.175-1.638-1.321a2 2 0 00-1.23 0c-.454.146-.849.538-1.638 1.32l-4 4.028m10.224-2.324l.341-.339c.806-.8 1.209-1.199 1.671-1.345a2 2 0 011.247.015c.46.156.853.565 1.64 1.383L20 16.5m-5.735-.562l3.955 4.025M12 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 .647 0 1.107.042 1.462m0 0c.03.26.084.465.176.646a2 2 0 00.874.874C5.52 20 6.08 20 7.2 20h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C20 18.48 20 17.92 20 16.8V12m-4-9l2.5 2.5m0 0L21 8m-2.5-2.5L21 3m-2.5 2.5L16 8"
      ></path>
    </svg>
  );
}

export default NoImageIcon;
