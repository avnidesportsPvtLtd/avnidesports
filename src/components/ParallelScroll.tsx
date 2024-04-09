"use client";
import { ParallaxScrollSecond } from "./ui/parallax-scroll-2";
import React from "react";

function ParallelScroll() {
  const images = [
    "/imgs/productimg1.png",
    "/imgs/productimg2.png",
    "/imgs/productimg3.png",
    "/imgs/productimg4.png",
    "/imgs/productimg5.png",
    "/imgs/productimg6.png",
    "/imgs/produnctimg7.png",
    "/imgs/productimg8.png",
    "/imgs/productimg9.png",
  ];
  return (
    <>
      <ParallaxScrollSecond images={images} className="" />
    </>
  );
}

export default ParallelScroll;
