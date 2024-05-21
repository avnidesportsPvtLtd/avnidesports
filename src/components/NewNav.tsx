import React from "react";
import Link from "next/link";
import NavSheet from "./NavSheet";
import Image from "next/image";

function NewNav() {
  return (
    <>
      {/* mobile view */}
      <div className="lg:hidden flex justify-between ">
        <NavSheet />
        <Image
          src="/imgs/01newlogo.png"
          alt="logo"
          width={80}
          height={10}
          className=" "
        />{" "}
        <h3 className="p-4">
          <Link href="/contactUs">
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
          src="/imgs/01newlogo.png"
          alt="logo"
          width={80}
          height={10}
          className=" "
        />{" "}
        <Link href="/" target="_blank" className="">
          <Image
            src="/imgs/AMSWAN.png"
            alt="logo"
            width={300}
            height={10}
            className=" "
          />{" "}
          {/* <span className="md:pl-2 pt-3 text-red-500 font-mont text-lg font-bold">
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
          </span> */}
        </Link>
        <div />
      </div>
      <div className="hidden lg:flex lg:justify-center pt-3 pb-4 bg-slate-50 sticky top-0 ">
        <Link href="/" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            HOME
            {/* <div className="bg-white h-[2px] w-0 transition-all duration-300 hover:w-full"></div> */}
          </span>
        </Link>
        <Link href="/servcs" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
       
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            SERVICES
          </span>
        </Link>
        <Link href="/ourProduct" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            OUR PRODUCT
          </span>
        </Link>
        <Link href="/customer" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            CUSTOMERS
          </span>
        </Link>

        <Link href="/contactUs" target="_blank">
          <span
            className="p-2 text-red-600  group relative  
        hover:before:scale-x-100 hover:before:origin-left 
        before:w-full before:h-[2px] before:origin-right 
        before:transition-transform before:duration-700 
        before:scale-x-0 before:bg-red-500 lg:pl-4 before:absolute 
        before:left-0 before:bottom-0 font-mont font-normal text-xs"
          >
            CONTACT US
          </span>
        </Link>
      </div>
    </>
  );
}

export default NewNav;
