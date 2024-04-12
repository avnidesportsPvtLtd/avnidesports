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
import NavSheet from "./NavSheet";
import Navbar from "./Navbar";

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
      {/* navbar for smaller screens  */}
      <div className="relative w-full  p-2 flex justify-between md:hidden  bg-[#cc6c5c]">
        <NavSheet />

        <div className="relative flex justify-center ">
          <Link href="https://amswan.co/" target="_blank" className="flex">
            {/* <span className=" text-white font-mont font-medium">A</span>
            <span className=" text-white font-mont font-medium">V</span>
            <span className=" text-white font-mont font-medium">N</span>
            <span className=" text-white font-mont font-medium">I</span>
            <span className=" text-white font-mont font-medium">D</span>
            <span className=" text-white font-mont font-medium">E</span> */}
            <Image
              src="/imgs/avnide1.png"
              alt="logo"
              width={80}
              height={10}
              className=" "
            />{" "}
            {/* <span className=" text-white font-mont font-medium">S</span>
            <span className=" text-white font-mont font-medium">P</span>
            <span className=" text-white font-mont font-medium">O</span>
            <span className=" text-white font-mont font-medium">R</span>
            <span className=" text-white font-mont font-medium">T</span>
            <span className=" text-white font-mont font-medium">S</span> */}
          </Link>
        </div>

        <div className="p-2">
          <Link href="https://amswan.co/pages/about-us">
            <span
              className="text-white m-0 p-0 transition-all duration-700
              hover:text-red-500 w-fit"
            >
              CONTACT US
            </span>
          </Link>
        </div>
      </div>
      {/* navbar */}

      <Navbar />
      {/* lamp effect  */}
      {/* <Lamp /> */}
      {/* navbar videos  */}
      <div className="relative hidden md:contents justify-center items-center md:-top-24 z-0 h-fit w-full">
        <video width="full" muted autoPlay loop>
          <source src="/vids/amswan.mp4" type="video/mp4" />
        </video>
      </div>

      <Slider />

      <hr />

      <div className=" px-4 w-full">
        <Toaster position="top-center" />

        <ButtonsCard>
          <Link href="https://amswan.co/collections/new-arrival">
            <button
              className="px-8 py-2 rounded-md bg-red-500 text-white hover:text-red-500
            font-bold transition duration-200 hover:bg-white
             border-2 border-transparent hover:border-red-500"
            >
              FIND OUT MORE
            </button>
          </Link>
        </ButtonsCard>
        <ParallaxScroll images={images} className="hidden lg:contents" />
      </div>
    </div>
  );
}
const images = [
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
  "/skirtsimages/i8.png",
  "/skirtsimages/i9.png",
  "/wtrckpant/i7.png",
  "/wtrckpant/i8.png",
  "/wtrckpant/i9.png",
  "/wtrckpant/i10.png",
  "/wtrckpant/i11.png",
  "/wtrckpant/i12.png",
  "/wsweatshirt/i8.png",
  "/skirtsimages/i2.png",
  "/skirtsimages/i3.png",
  "/skirtsimages/i4.png",
  "/wsweatshirt/i9.png",
  "/wsweatshirt/i10.png",
  "/wsweatshirt/i11.png",
  "/wsweatshirt/i12.png",
  "/wtshirt/i3.png",
  "/wtshirt/i4.png",
  "/wtshirt/i6.png",
  "/wtshirt/i7.png",
  "/wtshirt/i8.png",
  "/wtshirt/i9.png",
  "/wtshirt/i10.png",
  "/wtshirt/i11.png",
  "/wtshirt/i3.png",
];

export default HeroSection;
