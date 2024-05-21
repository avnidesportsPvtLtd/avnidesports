import NewNav from "@/components/NewNav";
import Link from "next/link";
function page() {
  return (
    <div className="bg-white">
      <NewNav />
      <div className="bg-[url('/imgs/123.jpg')] p-5 m-8">
        <h1 className="text-red-600 text-3xl  text-center">
          Engage with us and see the difference
        </h1>
        <br />
        <br />
        <h3 className="text-red-600 text-lg p-8  text-center">
          We believe that a business with a great design, branding and content
          can leap frog in its consumer journey. Take the first step: contact
          us, and together, we will carve a niche for your brand.
        </h3>{" "}
        <br />
        <br />
        <h1 className="text-red-600 text-2xl text-center">
          AVNIDE SPORTS PVT. LTD. 708, 7th FLOOR, IRIS TECH PARK
        </h1>{" "}
        <br />
        <br />
        <h2 className="text-red-600 text-xl  text-center">
          Contact Number : 9312318249
        </h2>
      </div>

      <div className="bg-[#D9D9D9] w-full p-10 mt-8">
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
