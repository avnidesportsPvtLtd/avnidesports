"use client";
import NewNav from "@/components/NewNav";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Link from "next/link";

const images = [
  "/imgs/productimg1.png",
  "/imgs/productimg2.png",
  "/imgs/productimg3.png",
  "/imgs/productimg4.png",
  "/imgs/productimg5.png",
  "/imgs/productimg6.png",
  "/imgs/produnctimg7.png",
];

function page() {
  return (
    <div className="bg-white ">
      <NewNav />

      <h1 className="text-center text-red-600 text-3xl font-antic font-normal pt-10">
        OUR PRODUCTS{" "}
      </h1>
      <ParallaxScroll images={images} />

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
    </div>
  );
}

export default page;
