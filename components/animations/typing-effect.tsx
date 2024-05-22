"use client";

import React from "react";

export function TypingEffect() {
  const text = "TOBIAS MEYHÖFER";
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h1 className="mb-2 text-center font-montserrat text-2xl font-bold tracking-[-0.02em] drop-shadow-sm lg:text-5xl xl:mb-4 2xl:text-8xl">
      {displayedText ? displayedText : ""}
    </h1>
  );
}
