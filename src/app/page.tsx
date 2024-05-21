import Fotter from "@/components/Fotter";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewNav from "@/components/NewNav";
import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="bg-white ">
      {/* <HeroSection /> */}
      {/* <Navbar /> */}
      <NewNav />
      <Section />
      <Fotter />
    </main>
  );
}
