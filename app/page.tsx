import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import ShowCase from "@/components/ShowCase";
import HighLights from "@/components/HighLights";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="md:mt-20">
      <Navbar />
      <Hero/>
   
      <ShowCase/>
      <HighLights/>
    </main>
  )
}