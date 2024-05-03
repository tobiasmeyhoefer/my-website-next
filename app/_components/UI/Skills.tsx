import Image from "next/image";
import angular from "@/public/svg/skills/angular-svgrepo-com.svg"
import bash from "@/public/svg/skills/bash-icon-svgrepo-com.svg"
import cSharp from "@/public/svg/skills/c-sharp-svgrepo-com.svg"
import css from "@/public/svg/skills/css-3-svgrepo-com.svg"
import dotnet from "@/public/svg/skills/dotnet-svgrepo-com.svg"
import firebase from "@/public/svg/skills/firebase-svgrepo-com.svg"
import git from "@/public/svg/skills/git-svgrepo-com.svg"
import github from "@/public/svg/skills/github-142-svgrepo-com.svg"
import gitlab from "@/public/svg/skills/gitlab-svgrepo-com.svg"
import html from "@/public/svg/skills/html-5-svgrepo-com.svg"
import java from "@/public/svg/skills/java-svgrepo-com.svg"
import javascript from "@/public/svg/skills/javascript-svgrepo-com.svg"
import kotlin from "@/public/svg/skills/kotlin-svgrepo-com.svg"
import mongodb from "@/public/svg/skills/mongodb-svgrepo-com.svg"
import neon from "@/public/svg/skills/neon-icon-seeklogo.svg"
import next from "@/public/svg/skills/next-dot-js-svgrepo-com.svg"
import react from "@/public/svg/skills/react-javascript-js-framework-facebook-svgrepo-com.svg"
import swift from "@/public/svg/skills/swift-svgrepo-com.svg"
import tailwind from "@/public/svg/skills/tailwind-svgrepo-com.svg"
import typescript from "@/public/svg/skills/typescript-icon-svgrepo-com.svg"
import vscode from "@/public/svg/skills/vscode-svgrepo-com.svg"

import styles from "@/app/_components/UI/skills.module.css"


const Skills = () => {
  return ( 
    // xl:p-20 p-8 lg:pt-0
    <section className="bg-neutral-100 w-full md:pb-10">
      <h2 className="text-black text-4xl font-montserrat xl:pl-20 md:pl-12 pl-6 font-bold mb-12">Skills</h2>
      <div className={styles.scrollContainer}>
        <div className={styles.carouselprimary}>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={angular} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={bash} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={cSharp} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={css} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={dotnet} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={firebase} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={git} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={github} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={swift} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={tailwind} alt="mongodb icon" width={70} height={70}/>
        </div>
        <div className={`${styles.carouselprimary} ${styles.carouselsecondary}`}>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={gitlab} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={html} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={java} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={kotlin} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={neon} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={javascript} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={next} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={react} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={typescript} alt="mongodb icon" width={70} height={70}/>
          <Image className="lg:w-[70px] md:w-[40px] w-[25px]" src={vscode} alt="mongodb icon" width={70} height={70}/>
        </div>
      </div>
    </section>
  );
}
 
export default Skills;