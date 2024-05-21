"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";

function Services() {
  return (
    <>
      <h2 className="text-center text-red-600 text-3xl font-antic font-normal pt-10">
        SERVICES{" "}
      </h2>

      <div className="h-screen py-20 w-full cursor-grabbing">
        <LayoutGrid cards={cards} />
      </div>

      <div className="bg-[#D9D9D9] w-full p-10">
        <p className="text-center text-white font-mono font-thin m-0 p-2 text-sm">
          Copyright &#169; 2024 AVNIDE SPORTS PVT. LTD. - All Rights Reserved.
        </p>
        <h2 className="text-center text-red-500 font-extralight pb-4">
          <span>Privacy Policy</span>.
          <Link href="https://avnide.com/terms-and-conditions">
            <span className="pl-4">Terms and Conditions.</span>
          </Link>
        </h2>
      </div>
    </>
  );
}

const SkeletonOne = () => {
  return (
    <div className=" cursor-pointer">
      <p className="font-bold text-4xl text-white">BRAND DEVELOPMENT</p>
      <p className="font-normal text-base text-white"></p>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Brand Concept
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Brand Strategy
      </h3>
      <h3 className="font-normal text-base max-w-lg text-neutral-200">
        Brand Development
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Brand Execution
      </h3>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className=" cursor-pointer">
      <p className="font-bold text-4xl text-white">DESIGN</p>
      <p className="font-normal text-base text-white"></p>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Design Strategy
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Design Prototypes
      </h3>
      <h3 className="font-normal text-base max-w-lg text-neutral-200">
        Technical Specifications Pack
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Product, Trim, Branding, Packaging.
      </h3>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className=" cursor-pointer">
      <p className="font-bold text-4xl text-white">PRODUCT DEVELOPMENT</p>
      <p className="font-normal text-base text-white"></p>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Concept to Commercialization
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Strategy
      </h3>
      <h3 className="font-normal text-base max-w-lg text-neutral-200">
        Sourcing
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Costing{" "}
      </h3>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className=" cursor-pointer">
      <p className="font-bold text-4xl text-white">SUPPLY CHAIN MANAGEMENT</p>
      <p className="font-normal text-base text-white"></p>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        End to End Supply Chain Management
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Product Lifecycle Management
      </h3>
      <h3 className="font-normal text-base max-w-lg text-neutral-200">
        Supply Chain Strategy
      </h3>
      <h3 className="font-normal text-base  max-w-lg text-neutral-200">
        Sourcing & Logistics
      </h3>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/imgs/ser4.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/imgs/ser1.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/imgs/ser3.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/imgs/ser2.jpeg",
  },
];

export default Services;
