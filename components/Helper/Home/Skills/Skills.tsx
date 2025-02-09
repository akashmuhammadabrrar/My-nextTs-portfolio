import React from "react";
import SectionHeading from "../../SectionHeading";
import { skillsData } from "@/app/Data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="pt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
              key={skill.id}>
              <SkillCard skill={skill}></SkillCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
