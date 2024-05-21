"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import RevelCard from "./RevelCard";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Social from "./Social";

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

// acertinity icon
const AceternityIcon = () => {
  return (
    <Image
      src="/imgs/swanmark.png"
      alt="logo"
      width={50}
      height={50}
      className="border rounded-md"
    />

    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

function Fotter() {
  return (
    <div>
      {/* <div className="grid md:grid-cols-2  sm:gap-2 sm:p-14">
        <Image
          src="/imgs/img1.png"
          alt="logo"
          width={300}
          height={200}
          className=""
        />
        <h1 className="text-center pt-56 text-3xl text-red-600">ACTIVEWEAR</h1>


        <h1 className="text-center pt-56 text-3xl text-red-600">
          ATHLEISUREWEAR
        </h1>
        <Image
          src="/imgs/img2.png"
          alt="logo"
          width={300}
          height={200}
          className=""
        />
        <Image
          src="/imgs/img3.png"
          alt="logo"
          width={300}
          height={200}
          className=""
        />
        <h1 className=" text-center md:pt-56 text-3xl text-red-600">
          SPORTSWEAR
        </h1>
        <h1 className=" text-center pt-56 text-3xl text-red-600">FOOTWEAR</h1>
        <Image
          src="/imgs/img4.png"
          alt="logo"
          width={300}
          height={200}
          className=""
        />
        <Image
          src="/imgs/img5.png"
          alt="logo"
          width={300}
          height={200}
          className=""
        />
        <h1 className=" text-center pt-56 text-3xl text-red-600">
          ACCESSORIES
        </h1>
      </div> */}
      <h2
        className="text-center text-red-600 text-3xl font-antic font-normal pt-10
        p-2 sm:p-12 mt-12 underline
        underline-offset-8 decoration-1"
      >
        KEY DIFFERENTIATORS
      </h2>
      <div className="grid md:grid-cols-3 gap-3 sm:ml-8">
        {/* <Card title="Branding" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />{" "}
        </Card> */}

        {/* <Card title="Licensing" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card> */}

        {/* <Card title="Creative Sourcing" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />{" "}
        </Card> */}

        {/* <h1 className="p-4 text-center font-mono text-xl text-red-600">
          BRANDING
        </h1>
        <h1 className="p-4 text-center font-mono text-xl text-red-600">
          LICENSING
        </h1>
        <h1 className="p-4 text-center font-sans text-xl text-red-600">
          CREATIVE SOURCING
        </h1> */}
      </div>

      <div className="grid md:grid-cols-3 gap-3 sm:ml-8 mt-8">
        <div>
          <h1 className="p-4 text-center font-antic text-xl text-red-600">
            BRANDING
          </h1>

          <Image src="/imgs/dt.png" alt="img" width={500} height={800} />
          <h1 className="p-4 text-center font-antic text-xl text-red-600">
            DIGITAL TRANSFORMATION
          </h1>
          <p className="p-6 font-thin text-gray-500 font-serif text-center">
            Website Creation, Photoshoots, E-com shoots
          </p>
        </div>

        <div>
          <h1 className="p-4 text-center font-antic text-xl text-red-600">
            LICENSING
          </h1>
          <Link href="https://www.youtube.com/watch?v=uZ5NrkSA550">
            <Image src="/imgs/cc.png" alt="img" width={500} height={800} />
          </Link>

          <h1 className="p-4 text-center font-antic text-xl text-red-600">
            CONTENT CREATION
          </h1>
          <p className="p-6 font-thin text-gray-500 font-serif text-center">
            Blogs, YouTube Videos, Lifestyle Videos, Write up
          </p>
        </div>
        <div>
          <h1 className="p-4 text-center font-antic text-xl text-red-600">
            CREATIVE SOURCING
          </h1>
          <Image src="/imgs/sm.png" alt="img" width={500} height={800} />

          <h1 className="p-4 text-center font-antic text-xl text-red-600">
            SOCIAL MEDIA
          </h1>

          <p className="p-6 font-thin text-gray-500 font-serif text-center">
            Instagram, Facebook, Pinterest, YouTube, LinkedIn, Twitter
          </p>
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-full">
        <h1 className="p-8 text-center underline underline-offset-8 text-white font-mono font-semibold cursor-pointer">
          SUBSCRIBE
        </h1>
        <p className="p-4 text-center text-xs text-white font-mono">
          Sign up to hear from us about specials, sales, and events.
        </p>
        <div className=" flex justify-center">
          <input
            type="email"
            placeholder="zemini@gmail.com.."
            className="p-4 border-2 rounded-md border-transparent  w-1/2 "
          />
        </div>
        <ButtonsCard className="">
          <Link href="https://amswan.co/account/login">
            <button
              className="px-8 py-2  rounded-lg bg-red-500 text-white 
            font-bold transition duration-200 hover:bg-white
             hover:text-black border-2 border-transparent hover:border-red-500"
            >
              Sign UP
            </button>
          </Link>
        </ButtonsCard>
        <Social />
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

export default Fotter;
