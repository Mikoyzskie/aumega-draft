import { Hero } from "@/components/Hero";
import Image from "next/image";

import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonial />
    </main>
  );
}
