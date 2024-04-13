import React from "react";
import Link from "next/link";
import NavSheet from "./NavSheet";
import Image from "next/image";
import Section from "./Section";

function NewNav() {
  return (
    <>
      {/* mobile view */}
      <div className="lg:hidden flex justify-between ">
        <NavSheet />
        <Image
          src="/imgs/avnide1.png"
          alt="logo"
          width={80}
          height={10}
          className=" "
        />{" "}
        <h3 className="p-4">
          <Link href="https://amswan.co/pages/about-us">
            <span
              className="text-red-500 m-0  transition-all duration-700
              hover:text-red-500 w-fit"
            >
              CONTACT US
            </span>
          </Link>
        </h3>
      </div>

      {/* laptop an above  */}
      <div className="hidden lg:flex  lg:pt-4  ">
        <Image
          src="/imgs/avnide1.png"
          alt="logo"
          width={80}
          height={10}
          className=" "
        />{" "}
        <Link href="https://amswan.co/" target="_blank" className="">
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            A
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            V
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            N
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            I
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            D
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            E
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            S
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            P
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            O
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            R
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            T
          </span>
          <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
            S
          </span>
        </Link>
        <div />
      </div>
      <div className="hidden lg:flex lg:justify-center pt-3 pb-4 bg-slate-50 sticky top-0 ">
        <Link href="https://amswan.co/collections/new-arrival" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            New Arrivals
            {/* <div className="bg-white h-[2px] w-0 transition-all duration-300 hover:w-full"></div> */}
          </span>
        </Link>
        <Link href="https://amswan.co/collections/men" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
       
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            Men&apos;s
          </span>
        </Link>
        <Link href="https://amswan.co/collections/women-1" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            Women&apos;s
          </span>
        </Link>
        <Link href="https://amswan.co/collections/mens-shirts" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            Collections
          </span>
        </Link>

        <Link href="https://amswan.co/blogs/news" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            Discover
          </span>
        </Link>
        <Link href="https://amswan.co/pages/contact" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            Contact us
          </span>
        </Link>
      </div>
      <Section />
    </>
  );
}

export default NewNav;
