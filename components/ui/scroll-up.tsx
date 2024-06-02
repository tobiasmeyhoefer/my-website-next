"use client";

import { FaAngleUp } from "react-icons/fa";

const ScrollUp = () => {
  return (
    <a href="#nav">
      <div className="fixed bottom-4 right-4 rounded-full bg-neutral-800 p-4 transition-all hover:bg-neutral-700">
        <FaAngleUp className="fill-white" />
      </div>
    </a>
  );
};

export default ScrollUp;
