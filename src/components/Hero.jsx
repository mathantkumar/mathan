import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text highlighting
    // gsap.from(".text-highlight", {
    //   scrollTrigger: {
    //     trigger: ".text-highlight",
    //     start: "top bottom",
    //     end: "bottom top",
    //     toggleActions: "play",
    //   },
    //   opacity: 0,
    //   y: 20,
    //   stagger: 0.1,
    //   duration: 10,
    //   ease: "elastic.in(1, 0.3)",
    // });

    // Animation for text scaling
    gsap.from(".text-scaling", {
      scrollTrigger: {
        trigger: ".text-scaling",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
      },
      scale: 0,
      opacity: 0,
      ease: "elastic.in(1, 0.3)",
      delay: 1,
      duration: 1,
    });

    // Animation for text sequence
    gsap.from(".text-sequence", {
      scrollTrigger: {
        trigger: ".text-sequence",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play",
      },
      opacity: 1,
      ease: "elastic.in(1, 0.3)",
      delay: 1,
      duration: 12,
    });
  }, []);

  return (
    <section className="nav-height relative w-full ">
      <div className="main-text"></div>
      {/* Apply classes for text effects */}
      <div className="main-text">
        <p className="text-4xl font-semibold text-gray py-20 text-left">
          hey there <span className="wave"> 👋🏻 </span>, I'm Mathan I'm all about
          making awesome websites. You'll usually find me diving deep into{" "}
          <span className="text-highlight text-gray-800">JavaScript</span>,{" "}
          <span className="text-highlight text-gray-800">React.js</span>, and
          whatever else makes the web tick. Git keeps me sane, and I love
          cooking up tests for my React components. Oh, and lately, I've been
          poking around
          <span className="text-highlight text-gray-800"> Java</span> and{" "}
          <span className="text-sequence text-gray-800">Spring Boot</span> for
          some backend shenanigans. Just rollin' with the tech flow, you know.👨‍💻
          Currently as Software Engineer at{" "}
          <span className="text-sequence text-gray-800">tcs</span> based
          Bengaluru.
        </p>
        <p className="text-black text-4xl text-center arrow">↓</p>
      </div>
    </section>
  );
};

export default Hero;
