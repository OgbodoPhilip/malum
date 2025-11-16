import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductViewer from "@/components/ProductViewer";
import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import ShowCase from "@/components/ShowCase";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="md:mt-20">
      <Navbar />
      <Hero/>
      <ProductViewer/>
      <ShowCase/>
    </main>
  )
}