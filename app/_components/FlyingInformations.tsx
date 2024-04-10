import Image from "next/image";
import Script from "next/script";
import blob1 from "@/public/svg/blob1.svg";
import blob2 from "@/public/svg/blob2.svg";
import blob3 from "@/public/svg/blob3.svg";

const FlyingInformations = () => {
  return (
    <div id="box" className="absolute bottom-0 left-0 right-0 top-0 -z-10">
      <div
        id="dvd"
        className="bouncing_info absolute -z-10 text-center text-white"
      >
        <Image
          className="relative left-1/2 top-1/2 -translate-x-1/2"
          alt="blob"
          src={blob1}
          width={200}
          height={200}
        />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">21 years old</p>
      </div>
      <div
        id="dvd"
        className="bouncing_info absolute -z-10 text-center text-white"
      >
        <Image
          className="relative left-1/2 top-1/2 -translate-x-1/2"
          alt="blob"
          src={blob2}
          width={200}
          height={200}
        />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">born in berlin</p>
      </div>
      <div
        id="dvd"
        className="bouncing_info absolute -z-10 text-center text-white"
      >
        <Image
          className="relative left-1/2 top-1/2 -translate-x-1/2"
          alt="blob"
          src={blob3}
          width={200}
          height={200}
        />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">track & field athlete</p>
      </div>
      {/* <div
        id="dvd2"
        className="bouncing_info absolute -z-10 w-32 bg-text p-5 text-center text-white"
      >
        born in berlin
      </div>
      <div
        id="dvd3"
        className="bouncing_info relative -z-10 w-32 bg-text p-5 text-center text-white"
      >
        track & field athlete
      </div> */}
      <Script src="scripts/bouncing.js"></Script>
    </div>
  );
};

export default FlyingInformations;
