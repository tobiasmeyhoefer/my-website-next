import Script from "next/script";

const FlyingInformations = () => {
  return (
    <div
      id="box"
      className="absolute bottom-0 left-0 right-0 top-0 -z-10"
    >
      <div
        id="dvd"
        className="bouncing_info absolute -z-10 w-32 bg-text p-5 text-center text-white"
      >
        21 years old
      </div>
      <div
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
      </div>
      <Script src="scripts/bouncing.js"></Script>
    </div>
  );
};

export default FlyingInformations;
