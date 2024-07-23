import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { animateTitle, animateImage, revealMenu } from "./animation";
import { Logo } from "../logo";

const Hero: React.FC = () => {
  const timeline = useRef<gsap.core.Timeline>(gsap.timeline());
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);
    return () => context.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col" ref={heroRef}>
      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center px-16 z-10">
        <h1 className="grid grid-cols-[max-content_1fr_max-content] items-center gap-12 text-[12vw] w-full">
          <span data-hidden data-title-first>
            Star
          </span>
          <span data-hero-line className="inline-block h-1.5 w-full bg-white scale-x-0 origin-center"></span>
          <span data-hidden data-title-last>
            agency
          </span>
        </h1>
      </div>
      
      {/* Image at the bottom */}
      <div className="mt-auto relative h-[33vh] w-auto overflow-hidden m-4 rounded-lg">
        <div data-image-overlay className="absolute inset-0 z-20 bg-black scale-y-[0.31] origin-bottom-center"></div>
        <Image
          data-image
          src="/images/blob.jpg"
          layout="fill"
          objectFit="cover"
          alt="Blob"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;