import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewSlider from "./NewSlider";

function Section() {
  return (
    <>
      <div
        className="bg-scroll md:flex  place-items-start "
        style={{
          backgroundImage: `url('/imgs/productimg1.png')`,
          height: "600px",
        }}
      >
        {/* <Image
          src="/imgs/productimg1.png"
          alt="pic"
          width={1300}
          height={500}
          className=" relative"
        /> */}
        <p className=" text-center text-white font-thin font-italiano text-4xl  md:p-3 md:w-2/5">
          AVNiDE is an Apparel & Lifestyle Brand Development & Management
          company dedicated to New Brand Development, Design & Product
          Development for leading Apparel & Lifestyle ecommerce companies.
          <span className="pt-2">~~ AVNIDE SPORTS</span>
        </p>
      </div>
      <div className=" flex flex-col place-items-center lg:mt-5">
        <h2 className="text-center text-red-600 text-3xl font-antic font-normal pt-10">
          OUR VISION{" "}
        </h2>
        <p className="text-red-400 text-justify font-mont text-sm pt-10 md:w-1/2 p-3 ">
          AVNIDE mission is to create, evolve, transform, reimagine Apparel &
          Lifestyle brands through innovative business models, powerful
          storytelling, compelling content and immersive experiences. Brand
          building all consumer product categories including apparel, intimates,
          footwear & accessories through Digital Mediums.
        </p>
        <h2 className="text-center text-red-600 text-3xl font-antic font-normal pt-10">
          Our Products & Brands
        </h2>
        <p className="text-red-400 text-justify  font-mont text-sm pt-10 md:w-1/2 p-3 ">
          Our products, which include apparel, accessories, and collections for
          men and women compose one of the world&apos;s most widely recognised
          families of consumer brands. Reflecting a distinctive American
          perspective, we have been an innovator in aspirational lifestyle
          branding and believe that, under the direction of internationally
          renowned designer AMSWAN, we have had a considerable influence on the
          way people dress and the way that fashion is advertised and celebrated
          throughout the world. We combine consumer insights with our design,
          marketing, and imaging skills to offer, along with our licencing
          alliances, broad lifestyle product collections with a unified vision.
        </p>
        <Link href="https://amswan.co/" target="_blank">
          <p className=" text-red-800 pt-10 font-mont">
            VISIT OUR CORPORATE SITE
          </p>
          <hr className=" bg-red-800 h-[2px] " />
        </Link>
      </div>
      <div className="  pt-12">
        <NewSlider />
      </div>
    </>
  );
}

export default Section;
