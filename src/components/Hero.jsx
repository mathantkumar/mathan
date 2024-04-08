import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import stars from "../assets/stars.mp4";

//gsap.registerPlugin(ScrambleTextPlugin);
var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 0.5,
    });
    tl.to("#role", {
      opacity: 1,
      delay: 1,
      scaleX: 1.3,
      yoyo: false,
    });
    tl.to("#design-text", {
      opacity: 1,
      delay: 1.1,
      scaleX: 1,
      yoyo: false,
    });
  }, []);
  return (
    <section className=" nav-height bg-black relative">
      <video
        autoPlay
        muted
        loop
        playsInline={true}
        key={stars}
        className="pointer-events-none"
      >
        <source src={stars} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p id="hero" className="text-5xl font-semibold text-white opacity-0 ">
          Hello, 👋🏻 I'm Mathan
        </p>
        <p id="role" className="text-5xl font-semibold text-white opacity-0">
          Frontend Developer
          <br />
        </p>
        <p
          id="design-text"
          className="text-gray text-2xl font-semibold opacity-0"
        >
          Digital design is like painting, except the paint never dries.
        </p>
      </div>
    </section>
  );
};

export default Hero;
