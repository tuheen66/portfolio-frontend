import React from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiFirebaseFill, RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript, TbBrandNextjs, TbBrandRedux  } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="my-12 pb-8">
      <h2 className="text-3xl md:text-5xl font-bold uppercase text-center mb-12">
        My <span className="text-[#e67e22]">Skills</span> 
      </h2>
      <div className=" flex flex-wrap gap-8 lg:gap-20 justify-center mb-12">
        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <FaHtml5 className="text-4xl"></FaHtml5>
          <p>Html5</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <FaCss3Alt className="text-4xl"></FaCss3Alt>
          <p>CSS3</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <SiTailwindcss className="text-4xl"></SiTailwindcss>
          <p>Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <IoLogoJavascript className="text-4xl"></IoLogoJavascript>
          <p>JavaScript</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <TbBrandTypescript  className="text-4xl"></TbBrandTypescript>
          <p>TypeScript</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <RiReactjsLine className="text-4xl"></RiReactjsLine>
          <p>React Js</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <TbBrandNextjs className="text-4xl"></TbBrandNextjs>
          <p>Next Js</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <TbBrandRedux  className="text-4xl"></TbBrandRedux>
          <p>Redux</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <FaNodeJs className="text-4xl"></FaNodeJs>
          <p>Node Js</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <SiExpress className="text-4xl"></SiExpress>
          <p>Express</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <RiFirebaseFill className="text-4xl"></RiFirebaseFill>
          <p>Firebase</p>
        </div>

        <div className="flex flex-col items-center text-xl border-2 border-[#e67e22] w-32 h-32 justify-center rounded-full ">
          <SiMongodb className="text-4xl"></SiMongodb>
          <p>Mongodb</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
