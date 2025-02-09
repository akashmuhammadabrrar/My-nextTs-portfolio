import React from "react";
import SectionHeading from "../../SectionHeading";
import { projectData } from "@/app/Data/data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]" id="project-sec">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[70%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-125 transition-all duration-300">
              <Link href={project.url} target="_blank">
                <Image
                  className="w-full"
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
