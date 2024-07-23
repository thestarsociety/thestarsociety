"use client";

import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "@/components/custom/loader";
import { Hero } from "@/components/custom/hero";

const Home: React.FC = () => {
  const [loaderFinished, setLoaderFinished] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      {loaderFinished ? <Hero /> : <Loader timeline={timeline} />}
    </main>
  );
};

export default Home;