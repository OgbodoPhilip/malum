"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null); // Error 1: Must initialize useRef with null

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Error 2: Added proper error handling
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <Image src="/title.png" alt="mac" width={800} height={800} />
        <p className="mb-4">Supercharged by M2 Pro and M2 Max.</p>
        <button>Learn more</button>
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        loop
      />
     
    </section>
  );
}
