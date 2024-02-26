import { Hero } from "@/components/Hero";
import Image from "next/image";

import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonial />
      <Newsletter />
    </main>
  );
}
