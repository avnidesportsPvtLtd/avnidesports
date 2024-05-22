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
      <SheetTrigger className="hover:bg-[#cc6c5c] w-fit  p-4">
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
            <Link href="/" target="_blank">
              <span className="  transition-all duration-700 underline  underline-offset-4 ">
                HOME
              </span>
            </Link>
          </SheetTitle>
        
          <SheetTitle>
            {" "}
            <Link href="/servcs" target="_blank">
              <span
                className=" transition-all duration-700
              "
              >
              SERVICES
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="/ourProduct" target="_blank">
              <span
                className=" transition-all duration-700
              "
              >
               OUR PRODUCT
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="/customer" target="_blank">
              <span
                className=" transition-all duration-700
              "
              >
              CUSTOMERS
              </span>
            </Link>
          </SheetTitle>
          <SheetTitle>
            {" "}
            <Link href="/contactUs" target="_blank">
              <span
                className=" transition-all duration-700
              "
              >
              CONTACT US
              </span>
            </Link>
          </SheetTitle>
         
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavSheet;
