"use client";

import { FaAngleDown } from "react-icons/fa";

const ScrollDown = () => {
  return (
    <a href="#resume-area">
      <div className="absolute bottom-6 right-6 rounded-full bg-neutral-800 p-4 transition-all hover:bg-neutral-700">
        <FaAngleDown className="fill-white" />
      </div>
    </a>
  );
};

export default ScrollDown;
