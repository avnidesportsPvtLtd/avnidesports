"use client";
import React from "react";

import Image from "next/image";
import NewNav from "@/components/NewNav";
import Link from "next/link";

function page() {
  return (
    <div className="bg-white ">
      <NewNav />
      <Image src={`/imgs/scroll.png`} alt="scroll" height={700} width={1400} />

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
