import Script from "next/script"

export default function AboutMe() {
  return (
    // <div className="mt-40">
    //   <h1 className="font-bold text-3xl">About me</h1>
    //   <div className="p-5 rounded-xl bg-text text-white absolute top-2/3 left-80">Call me Tobi</div>
    //   <div className="p-5 rounded-xl bg-text text-white absolute top-96 left-2/3">21 years old</div>
    // </div>
    <>
    {/* hiervon 3 Stück machen die immer ihren Text ändern wenn sie zb horizontal anecken */}
      <div id="box" className="h-96 w-full mt-40">
        <div id="dvd" className="bouncing_info bg-text text-white relative w-32 p-5 text-center ">
          21 years old
        </div>
        <div id="dvd2" className="bouncing_info bg-text text-white relative w-32 p-5 text-center ">
          born in berlin
        </div>
        <div id="dvd3" className="bouncing_info bg-text text-white relative w-32 p-5 text-center ">
          track & field athlete
        </div>
        <Script src="scripts/bouncing.js" defer></Script>
      </div>
    </>
  )
}
