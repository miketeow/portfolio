"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type projectData = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

const projectList: projectData[] = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eum.",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className=" relative mb-12 xl:mb-14 ">
      <div className=" container mx-auto ">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className=" section-title mb-4">Latest Project</h2>
          <p className=" subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            aliquam!
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className=" xl:max-w-[1000px] xl:absolute right-16 top-0 ">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {projectList.map((project, index) => {
                return (
                  <CarouselItem key={index} className=" basis-1/3">
                    <ProjectCard project={project} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Work;
