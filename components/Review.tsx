"use client";

import Image from "next/image";

import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "James Potter",
    job: "Auror",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Emily Smith",
    job: "Doctor",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Ethan Hunt",
    job: "IMF Agent",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia.",
  },
];
const Review = () => {
  return (
    <section className=" mt-12 mb-12 xl:mb-32 xl:mt-32 ">
      <div className="container mx-auto ">
        <h2 className="section-title mb-12 text-center mx-auto ">Reviews</h2>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {reviewData.map((person, index) => {
              return (
                <CarouselItem key={index} className=" basis-1/3">
                  <Card className="p-8  bg-accent">
                    <CardHeader className="p-0 mb-10">
                      <div className="flex items-center gap-x-4">
                        <Image
                          src={person.avatar}
                          alt=""
                          width={70}
                          height={70}
                          priority
                        />
                        <div>
                          <CardTitle>{person.name}</CardTitle>
                          <p>{person.job}</p>
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
