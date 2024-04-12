import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div
      className="  z-50 relative  w-full items-center 
   hover:text-white  bg-transparent transition-all 
   duration-700 justify-items-center hover:bg-[#cc6c5c]"
    >
      <div className=" hidden md:flex justify-center ">
        <Link href="https://amswan.co/" target="_blank" className="flex">
          <span className="pl-4 text-white font-mont font-medium">A</span>
          <span className="pl-4 text-white font-mont font-medium">V</span>
          <span className="pl-4 text-white font-mont font-medium">N</span>
          <span className="pl-4 text-white font-mont font-medium">I</span>
          <span className="pl-4 text-white font-mont font-medium">D</span>
          <span className="pl-4 text-white font-mont font-medium">E</span>
          <Image
            src="/imgs/avnide1.png"
            alt="logo"
            width={65}
            height={65}
            className="ml-4 mr-2 "
          />{" "}
          <span className="pl-4 text-white font-mont font-medium">S</span>
          <span className="pl-4 text-white font-mont font-medium">P</span>
          <span className="pl-4 text-white font-mont font-medium">O</span>
          <span className="pl-4 text-white font-mont font-medium">R</span>
          <span className="pl-4 text-white font-mont font-medium">T</span>
          <span className="pl-4 text-white font-mont font-medium">S</span>
        </Link>
      </div>

      <div className="hidden lg:flex lg:justify-evenly pt-3 pb-3">
        <Link href="https://amswan.co/collections/new-arrival" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            New Arrivals
            {/* <div className="bg-white h-[2px] w-0 transition-all duration-300 hover:w-full"></div> */}
          </span>
        </Link>
        <Link href="https://amswan.co/collections/men" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
       
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            Men&apos;s
          </span>
        </Link>
        <Link href="https://amswan.co/collections/women-1" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            Women&apos;s
          </span>
        </Link>
        <Link href="https://amswan.co/collections/mens-shirts" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            Collections
          </span>
        </Link>
        <Link href="https://amswan.co/collections/bags" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold "
          >
            Bags & Accessories
          </span>
        </Link>
        <Link href="https://amswan.co/" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            Grab Your Deals
          </span>
        </Link>
        <Link href="https://amswan.co/blogs/news" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            Discover
          </span>
        </Link>
        <Link href="https://amswan.co/pages/contact" target="_blank">
          <span
            className="p-2 text-white  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-white before:absolute 
        before:left-0 before:bottom-0 font-mont font-semibold"
          >
            Contact us
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
