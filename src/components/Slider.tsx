"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Image from "next/image";

function Slider() {
  //   const images = [
  //     "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ];
  const images = [
    "/skirtsimages/i1.png",
    "/skirtsimages/i2.png",
    "/skirtsimages/i3.png",
    "/skirtsimages/i4.png",
    "/skirtsimages/i5.png",
    "/skirtsimages/i6.png",
    "/skirtsimages/i7.png",
    "/skirtsimages/i8.png",
    "/skirtsimages/i9.png",
    "/skirtsimages/i10.png",
    "/skirtsimages/i11.png",
    "/skirtsimages/i12.png",
  ];
  const img2 = [
    "/wtrckpant/i1.png",
    "/wtrckpant/i2.png",
    "/wtrckpant/i3.png",
    "/wtrckpant/i4.png",
    "/wtrckpant/i5.png",

    "/wtrckpant/i7.png",
    "/wtrckpant/i8.png",
    "/wtrckpant/i9.png",
    "/wtrckpant/i10.png",
    "/wtrckpant/i11.png",
    "/wtrckpant/i12.png",
  ];
  const img3 = [
    "/wsweatshirt/i1.png",
    "/wsweatshirt/i2.png",
    "/wsweatshirt/i3.png",
    "/wsweatshirt/i4.png",
    "/wsweatshirt/i5.png",
    "/wsweatshirt/i6.png",
    "/wsweatshirt/i7.png",
    "/wsweatshirt/i8.png",
    "/wsweatshirt/i9.png",
    "/wsweatshirt/i10.png",
    "/wsweatshirt/i11.png",
    "/wsweatshirt/i12.png",
  ];
  const img4 = [
    "/wtshirt/i1.png",
    "/wtshirt/i2.png",
    "/wtshirt/i3.png",
    "/wtshirt/i4.png",
    "/wtshirt/i5.png",
    "/wtshirt/i6.png",
    "/wtshirt/i7.png",
    "/wtshirt/i8.png",
    "/wtshirt/i9.png",
    "/wtshirt/i10.png",
    "/wtshirt/i11.png",
    "/wtshirt/i12.png",
  ];
  const img5 = [
    "/skirtsimages/i1.png",
    "/skirtsimages/i2.png",
    "/skirtsimages/i3.png",
    "/skirtsimages/i4.png",
    "/skirtsimages/i5.png",
    "/skirtsimages/i6.png",
    "/skirtsimages/i7.png",
    "/skirtsimages/i8.png",
    "/skirtsimages/i9.png",
    "/skirtsimages/i10.png",
    "/skirtsimages/i11.png",
    "/skirtsimages/i12.png",
  ];

  return (
    <>
      {/* <div className="flex justify-center p-20">
        <Image src="/imgs/head.jpg" alt="img" width={1000} height={300} />
      </div> */}
      <div className=" grid gap-2 sm:grid-cols-2 md:grid-cols-4  pl-10 pr-10 mt-0 gap-y-0 mb-8">
        {/* // slider 1 */}
        <ImagesSlider className="h-[20rem] border rounded-xl " images={images}>
          <motion.div
            initial={{
              opacity: 1,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>

        {/* slider 2 */}
        <ImagesSlider className="h-[20rem] border rounded-xl  " images={img2}>
          <motion.div
            initial={{
              opacity: 1,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>

        {/* slider 3 */}
        <ImagesSlider className="h-[20rem] border rounded-xl " images={img3}>
          <motion.div
            initial={{
              opacity: 1,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>
        {/* // slider 4 */}
        <ImagesSlider className="h-[20rem]  border rounded-xl" images={img4}>
          <motion.div
            initial={{
              opacity: 1,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>

        {/* slider 5 */}
        {/* <ImagesSlider className="h-[20rem] border rounded-xl" images={img5}>
          <motion.div
            initial={{
              opacity: 1,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider> */}
      </div>
    </>
  );
}

export default Slider;
