"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const reviewData = [
  {
    id: 1,
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
  {
    id: 2,
    avatar: "/reviews/avatar-2.png",
    name: "James Potter",
    job: "Auror",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
  {
    id: 3,
    avatar: "/reviews/avatar-3.png",
    name: "Emily Smith",
    job: "Doctor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
  {
    id: 4,
    avatar: "/reviews/avatar-4.png",
    name: "Ethan Hunt",
    job: "IMF Agent",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
];
const Review = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <section className=" mt-12 mb-12 xl:mb-32 xl:mt-32 ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-12 text-center mx-auto ">Reviews</h2>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="pt-16">
            {reviewData.map((person, index) => {
              return (
                <CarouselItem key={index} className=" basis-1/3">
                  <Card className="p-8  bg-accent ">
                    <CardHeader className="p-0 mb-10 ">
                      <div className="flex items-center justify-center ">
                        <div
                          className="relative z-[1000]"
                          onMouseEnter={() => setHoveredIndex(person.id)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <AnimatePresence mode="wait">
                            {hoveredIndex === person.id && (
                              <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                  transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                  },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                  translateX: translateX,
                                  rotate: rotate,
                                  whiteSpace: "nowrap",
                                  zIndex: 1000,
                                }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                              >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                                <div className="font-bold text-white relative z-30 text-base">
                                  {person.name}
                                </div>
                                <div className="text-white text-xs">
                                  {person.job}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <Image
                            src={person.avatar}
                            alt=""
                            width={70}
                            height={70}
                            priority
                            onMouseMove={handleMouseMove}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardDescription className=" text-lg text-accent-foreground">
                      {person.review}
                    </CardDescription>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
