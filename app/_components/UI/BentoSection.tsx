import germanyFlag from "@/public/images/germanyFlag.svg"
import england from "@/public/images/england.svg"
import denmark from "@/public/images/denmark.svg"
import turkey from "@/public/images/turkey.svg"
import Image from "next/image";

const BentoSection = () => {
  return (
    <section className="md:p-12 p-6 xl:p-20 pb-40 my-12 md:text-sm text-[12px]">
      <h2 className="text-4xl mb-12 font-bold">Else</h2>
      <div className="grid-container md:p6 p-0 font-montserrat font-bold">
        <div className="item1 flex flex-col gap-4 md:p-12">
          <Image className="w-12" src={germanyFlag} alt="germanyFlag"/>
          <p>German (native)</p>
        </div>
        <div className="item2">Stress resistance and high ambition</div>
        <div className="item3">hardworking</div>
        <div className="item4 font-montserrat font-light text-lg">teamwork</div>
        <div className="item5">special: IT law and psychology knowledge</div>
        <div className="item6 flex">
          <p className="z-10 relative top-2 font-medium text-[10px] md:text-[12px]">basics</p>
          <Image className="md:w-16 w-12 absolute" src={turkey} alt="turkey"/>
        </div>
        <div className="item7 flex md:gap-8 gap-2">
          <p>English (fluent)</p>
          <Image className="md:w-12 w-10" src={england} alt="england"/>
          </div>
        <div className="item8">Board member at SC Berlin</div>
        <div className="item9 font-montserrat font-light text-lg">helpful</div>
        <div className="item10">organisational talent</div>
        <div className="item11 flex flex-col gap-6">
          <p>
          Danish (basics)
          </p>
        <Image className="md:w-12 w-10" src={denmark} alt="denmark"/>
        </div>
        <div className="item12">determination</div>
      </div>
    </section>
  );
};

export default BentoSection;
