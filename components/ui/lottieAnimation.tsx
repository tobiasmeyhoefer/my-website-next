"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LottieAnimationGallery = () => {
  return (
    <div className="mt-40">
      <Player
        autoplay
        loop
        src="https://lottie.host/db4176d5-6dac-41eb-99d0-31610e6470cb/ZiiBuGiNSt.json"
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
