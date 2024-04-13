import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text highlighting
    gsap.to(".text-highlight", {
      scrollTrigger: {
        trigger: ".text-highlight",
        start: "top bottom", // Start animation when top of the element hits the bottom of the viewport
        end: "bottom top", // End animation when bottom of the element hits the top of the viewport
        toggleActions: "play", // Play animation only once
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 10,
      ease: "elastic.in(1, 0.3)",
    });

    // Animation for text scaling
    gsap.from(".text-scaling", {
      scrollTrigger: {
        trigger: ".text-scaling",
        start: "top bottom", // Start animation when top of the element hits the bottom of the viewport
        end: "bottom top", // End animation when bottom of the element hits the top of the viewport
        toggleActions: "play none none none", // Play animation only once
      },
      scale: 0,
      opacity: 0,
      ease: "elastic.in(1, 0.3)",
      delay: 1,
      duration: 1,
    });

    // Animation for text sequence
    gsap.to(".text-sequence", {
      scrollTrigger: {
        trigger: ".text-sequence",
        start: "top bottom", // Start animation when top of the element hits the bottom of the viewport
        end: "bottom top", // End animation when bottom of the element hits the top of the viewport
        toggleActions: "play", // Play animation only once
      },
      opacity: 1,
      ease: "elastic.in(1, 0.3)",
      delay: 1,
      duration: 12,
    });
  }, []);

  return (
    <section className="nav-height relative">
      <div className="main-text"></div>
      {/* Apply classes for text effects */}
      <div className="main-text">
        <p className="text-4xl font-semibold text-gray text-left">
          Hey there 👋🏻, I'm Mathan I'm all about making awesome websites. You'll
          usually find me diving deep into{" "}
          <span className="text-highlight text-gray-800">JavaScript</span>,{" "}
          <span className="text-highlight text-gray-800">React.js</span>, and
          whatever else makes the web tick. Git keeps me sane, and I love
          cooking up tests for my React components. Oh, and lately, I've been
          poking around
          <span className="text-highlight text-gray-800"> Java</span> and{" "}
          <span className="text-sequence text-gray-800">Spring Boot</span> for
          some backend shenanigans. Just rollin' with the tech flow, you know.
        </p>
        <p className="text-gray text-2xl font-semibold dive">
          Currently as Software Engineer at{" "}
          <span className="text-sequence text-gray-800">tcs</span> based on
          Bengaluru.
        </p>
        <button className="text-black">Available for work</button>
      </div>
    </section>
  );
};

export default Hero;
