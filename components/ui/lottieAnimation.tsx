"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LottieAnimationGallery = () => {
  return (
    <div className="mt-20 lottieanimationplane">
      <Player
        autoplay
        // loop
        src="https://lottie.host/1e4a38f5-3658-4038-8828-12092e389e78/fex64olPQQ.json"
        className="h-[100px] md:h-[300px]"
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default LottieAnimationGallery;
