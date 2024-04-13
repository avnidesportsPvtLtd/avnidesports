import React from "react";
import Image from "next/image";
import Link from "next/link";

function Social() {
  return (
    <div className="flex justify-center pt-4">
      <div className="pl-3  pb-3  pr-2   ">
        <Link href="https://www.instagram.com/as_amswan/">
          <Image
            src="/socials/instagram.png"
            alt="logo"
            width={30}
            height={50}
          />
        </Link>
      </div>
      <span className="border-r-2 h-7"></span>
      <div className="pl-3  pb-3  pr-2 ">
        {" "}
        <Link href="https://www.facebook.com/people/Amswanco/61552598751191/">
          <Image
            src="/socials/f2.png"
            alt="logo"
            width={30}
            height={50}
            className=""
          />
        </Link>
      </div>
      <span className="border-r-2 h-7"></span>
      <div className="pl-3 pb-3  pr-2  ">
        {" "}
        <Link href="https://www.linkedin.com/company/am-swan/">
          <Image
            src="/socials/linkedin.png"
            alt="logo"
            width={30}
            height={50}
          />
        </Link>
      </div>
      <span className="border-r-2 h-7"></span>
      <div className="pl-3 pb-3  pr-2  ">
        {" "}
        <Link href="https://in.pinterest.com/as_amswan/_created/">
          <Image
            src="/socials/pinterest.png"
            alt="logo"
            width={30}
            height={50}
          />
        </Link>
      </div>
      <span className="border-r-2 h-7"></span>
      <div className="pl-3  pb-3  pr-2 ">
        {" "}
        <Link href="https://www.youtube.com/channel/UCb6toAjkBTGwZWZhzT56_zw">
          <Image
            src="/socials/youtube.png"
            alt="logo"
            width={30}
            height={50}
            className=""
          />
        </Link>
      </div>
      {/* <span className="border-r-2 h-6"></span> */}
    </div>
  );
}

export default Social;
