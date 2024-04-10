import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger className="bg-[#1E0F46] w-fit  p-4">
        {" "}
        <h1 className="text-white pl-0 ml-0">
          <Image src="/imgs/menu.png" alt="logobar" height={20} width={20} />
        </h1>{" "}
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-[#FBFBF9] text-[#ab4d50] text-sm"
      >
        <SheetHeader>
          <SheetTitle className="">
            {/* <h1 className="p-2 w-fit">Move with Fashion</h1> */}
            <Link href="https://amswan.co/collections/men">
              <span className="  transition-all duration-700 underline  underline-offset-4 ">
                New Arrivals
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="https://amswan.co/collections/men">
              <span className="  transition-all duration-700">Men</span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="https://amswan.co/collections/women-1">
              <span
                className=" transition-all duration-700
              "
              >
                Women
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="https://amswan.co/blogs/news">
              <span
                className=" transition-all duration-700
              "
              >
                Discover
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="https://amswan.co/collections/bags">
              <span
                className=" transition-all duration-700
              "
              >
                Bags
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="https://amswan.co/collections/socks-1">
              <span
                className=" transition-all duration-700
              "
              >
                Socks
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="https://amswan.co/pages/about-us">
              <span
                className=" transition-all duration-700
              "
              >
                About Us
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavSheet;
