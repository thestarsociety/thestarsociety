"use client";

import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { collapseWords, introAnimation, progressAnimation } from "./animations";

interface LoaderProps {
  timeline: gsap.core.Timeline | null;
}

const Loader: React.FC<LoaderProps> = ({ timeline }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressNumberRef = useRef<HTMLSpanElement>(null);
  const wordGroupsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timeline) {
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
    }
  }, [timeline]);

  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[5vh] w-full z-10">
        <div
          className="h-full w-full bg-black origin-left scale-x-0"
          ref={progressRef}
        ></div>
        <span
          className="absolute -left-[5vw] top-1/2 -translate-y-1/2 z-20 whitespace-nowrap text-white text-3xl"
          ref={progressNumberRef}
        >
          0
        </span>
      </div>
      <div
        className="h-full w-full flex justify-center items-center flex-col bg-white overflow-hidden z-20 clip-path-loader"
        ref={loaderRef}
      >
        <div className="relative overflow-hidden h-[41.8rem]">
          <div className="absolute inset-0 h-full z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_47%,transparent_47%,transparent_55%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.9)_100%)]"></div>
          <div ref={wordGroupsRef} className="space-y-2">
            {words.map((word, index) => (
              <span key={index} className="block text-3xl text-black">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;