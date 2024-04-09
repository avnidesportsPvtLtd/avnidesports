"use client";
import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Slider from "./Slider";
import ParallelScroll from "./ParallelScroll";
import Lamp from "./Lamp";
import RevelCard from "./RevelCard";
import { ParallaxScroll } from "./ui/parallax-scroll";

const words = `AVNIDE mission is to create, evolve, transform, reimagine  Apparel & Lifestyle brands through innovative business models, powerful storytelling, compelling content and immersive experiences. Brand building all consumer product categories including apparel, intimates, footwear & accessories through Digital Mediums.
`;

function HeroSection() {
  const button = [
    {
      name: "Invert",
      description: "Simple button that inverts on hover",
      component: (
        <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Invert it
        </button>
      ),
    },
  ];

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <div>
      {/* navbar */}
      <div className="relative  grid  w-full sm:grid-cols-6 gap-0  z-10 hover:text-white  bg-transparent justify-items-center hover:bg-[#1E0F46]   transition-all duration-500">
        <div>
          <Link href="https://amswan.co/">
            <Image src="/imgs/avnide1.png" alt="logo" width={100} height={20} />{" "}
          </Link>
        </div>
        <div
          className="text-sm text-white  font-mono p-2 
        w-fit font-semibold underline
         underline-offset-8 
        cursor-pointer  
        "
        >
          <Link href="https://amswan.co/collections/men">
            <span className="text-red-500 hover:text-white transition-all duration-700">
              MEN
            </span>
          </Link>
        </div>
        <div
          className="text-sm text-white  font-mono p-3 
        w-fit font-semibold underline decoration-1 md:underline-offset-8 
         cursor-pointer  
        hover:text-white"
        >
          <Link href="https://amswan.co/collections/women-1">
            <span
              className="text-white transition-all duration-700
              hover:text-red-500"
            >
              WOMEN
            </span>
          </Link>
        </div>

        <div
          className="text-sm text-white  font-mono 
        p-3 w-fit font-semibold underline decoration-1 md:underline-offset-8
        cursor-pointer 
        hover:text-white"
        >
          <Link href="https://amswan.co/blogs/news">
            <span
              className="text-white transition-all duration-700
              hover:text-red-500"
            >
              DiSCOVER
            </span>
          </Link>
        </div>
        <div
          className="text-sm text-white  font-mono p-2
         w-fit font-semibold underline decoration-1 md:underline-offset-8
          cursor-pointer -top-1 
          hover:text-white"
        >
          <Link href="https://amswan.co/pages/about-us">
            <span
              className="text-white m-0 p-0 transition-all duration-700
              hover:text-red-500"
            >
              CONTACT US
            </span>
          </Link>
        </div>
      </div>
      {/* lamp effect  */}
      {/* <Lamp /> */}
      {/* navbar videos  */}
      <div className="grid md:grid-cols-2 relative sm:-top-16 z-0  w-full">
        <video src="/vids/front.mp4" autoPlay loop muted></video>
        <video src="/vids/whtsapfront.mp4" autoPlay loop muted></video>
      </div>
      {/* 
      <div
        className="h-[400vh] bg-white w-full dark:border  rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div> */}
      {/* <div>
        <video src="/vids/front2.mp4" autoPlay loop muted></video>
      </div> */}

      {/* heading brand name about  */}
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-red-100 to-red-400">
        About Avnide Sports
      </p>

      {/* motive about */}
      <p className="text-xs md:text-xl mb-6 font-normal text-center text-red-500 mt-4 max-w-lg mx-auto">
        MoveIt reflects our mission to get India active, healthy, and moving
      </p>
      <Slider />
      {/* <ParallelScroll /> */}

      {/* brand name  */}
      {/* <h1
        className="sm:pl-4 sm:pr-4 text-center w-full font-mono 
      text-4xl text-red-500 mt-8 sm:tracking-wide font-normal"
      >
        AVNIDE SPORTS PVT LTD
      </h1> */}

      {/* about avnide  */}
      {/* <p className="sm:pl-36 sm:pr-36  pt-16 text-center font-serif font-thin text-zinc-500 text-lg ml-8 mr-8 w-fit">
        AVNiDE is an Apparel & Lifestyle Brand Development & Management company
        dedicated to New Brand Development, Design & Product Development for
        leading Apparel & Lifestyle ecommerce companies.
      </p> */}

      {/* <h2 className="p-8 text-center font-thin text-4xl text-red-500 ">
        OUR VISION
      </h2> */}

      <hr />
      {/* <TextGenerateEffect
        words={words}
        className="sm:pl-36 sm:pr-36 w-fit pt-16 text-white"
      /> */}

      <div className=" px-4 w-full">
        <Toaster position="top-center" />

        <ButtonsCard>
          <Link href="https://amswan.co/collections/new-arrival">
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              FIND OUT MORE
            </button>
          </Link>
        </ButtonsCard>
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
}
const images = [
  // "/skirtsimages/i1.png",
  // "/skirtsimages/i10.png",
  "/wtrckpant/i3.png",
  "/wtrckpant/i4.png",
  "/wsweatshirt/i3.png",
  "/wsweatshirt/i4.png",
  "/wsweatshirt/i5.png",
  "/skirtsimages/i11.png",
  "/skirtsimages/i12.png",

  "/wtrckpant/i1.png",
  "/wtrckpant/i5.png",
  "/skirtsimages/i5.png",
  "/skirtsimages/i6.png",
  "/skirtsimages/i7.png",
  "/skirtsimages/i8.png",
  "/skirtsimages/i9.png",

  "/wtrckpant/i7.png",
  "/wtrckpant/i8.png",
  "/wtrckpant/i9.png",
  "/wtrckpant/i10.png",
  "/wtrckpant/i11.png",
  "/wtrckpant/i12.png",

  // "/wsweatshirt/i1.png",
  // "/wsweatshirt/i2.png",
  // "/wtrckpant/i2.png",
  // "/wsweatshirt/i6.png",
  // "/wsweatshirt/i7.png",
  "/wsweatshirt/i8.png",
  "/skirtsimages/i2.png",
  "/skirtsimages/i3.png",
  "/skirtsimages/i4.png",
  "/wsweatshirt/i9.png",
  "/wsweatshirt/i10.png",
  "/wsweatshirt/i11.png",
  "/wsweatshirt/i12.png",

  // "/wtshirt/i1.png",
  // "/wtshirt/i2.png",
  // "/skirtsimages/i10.png",
  // "/skirtsimages/i11.png",
  // "/skirtsimages/i12.png",
  "/wtshirt/i3.png",
  "/wtshirt/i4.png",
  // "/wtshirt/i5.png",
  // "/skirtsimages/i7.png",
  // "/skirtsimages/i8.png",
  // "/skirtsimages/i9.png",

  "/wtshirt/i6.png",
  "/wtshirt/i7.png",
  "/wtshirt/i8.png",
  "/wtshirt/i9.png",
  "/wtshirt/i10.png",
  "/wtshirt/i11.png",
  "/wtshirt/i12.png",

  //   "/skirtsimages/i1.png",
  //   "/skirtsimages/i2.png",
  //   "/skirtsimages/i3.png",
  //   "/skirtsimages/i6.png",
];

export default HeroSection;