import styles from "@/app/_components/UI/bento.module.css"
import { cn } from "@/lib/utils";

const BentoSection = () => {
  return (
    <section className="p-6 xl:p-20 my-12 md:text-sm text-[12px]">
      <div className={cn(styles.contai, "grid-container font-montserrat font-bold")}>
        <div className="item1">German (Native)</div>
        <div className="item2">Stress resistance and high ambition</div>
        <div className="item3">hardworking</div>
        <div className="item4">teamwork</div>
        <div className="item5">special: IT law and psychology knowledge</div>
        <div className="item6">Turkish (basics)</div>
        <div className="item7">English (fluent)</div>
        <div className="item8">Board member at SC Berlin</div>
        <div className="item9">helpful</div>
        <div className="item10">organisational talent</div>
        <div className="item11">Danish (basics)</div>
        <div className="item12">determination</div>
      </div>
    </section>
  );
};

export default BentoSection;
