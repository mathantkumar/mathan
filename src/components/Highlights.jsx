import React, { useEffect } from "react";
import unibuy from "../assets/unibuy.png";
import workkit from "../assets/workkit.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Highlights = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".image", {
      scrollTrigger: {
        trigger: ".image",
        start: "top bottom", // Start animation when top of the element hits the bottom of the viewport
        end: "bottom top", // End animation when bottom of the element hits the top of the viewport
        toggleActions: "play none none none", // Play animation only once
      },
      duration: 2,
      ease: "power2.in",
      opacity: 2,
    });
    gsap.from(".sub-text", {
      scrollTrigger: {
        trigger: ".sub-text",
        start: "top bottom", // Start animation when top of the element hits the bottom of the viewport
        end: "bottom top", // End animation when bottom of the element hits the top of the viewport
        toggleActions: "play none none none", // Play animation only once
      },
      duration: 2,
      y: 100,
      opacity: 2,
    });
  }, []);

  return (
    <section className=" bg-white p-10">
      <div className="text-black text-4xl text-gray font-semibold">
        Selected Work
      </div>
      <br />
      <div className="font-bold text-black text-xl">UNiBUY</div>

      <div className="flex justify-between py-10">
        <img src={unibuy} className="w-md image" alt="UNiBUY" />

        <div className="text-black sub-text text-xl">
          Presenting Unibuy, the cutting-edge e-commerce platform I contributed
          to building! 🚀 With Unibuy, users can explore a galaxy of products
          seamlessly, thanks to its robust architecture powered by Redux. I
          played a key role in architecting and developing features that enhance
          the shopping experience, ensuring smooth data management and state
          rendering. Plus, I meticulously conducted comprehensive unit testing,
          achieving 100% coverage for React components, guaranteeing top-notch
          reliability and performance. Dive into the technical marvel that is
          Unibuy and experience e-commerce like never before! 🛒
          <br />
          <br />
          <span className="text-blue flex-column text-right ">Read More →</span>
        </div>
      </div>

      <div className="font-bold text-black text-xl">workkit</div>
      <div className="flex justify-between py-10">
        <div className="text-black sub-text text-xl py-15">
          Workkit, a Survey Form Builder app I drove from concept to reality! 🚀
          Picture this: personalized surveys tailored to your heart's content,
          all powered by Redux for seamless data management. I fine-tuned every
          bit of code to ensure your UI states render flawlessly. And let's talk
          testing – <br />I went full throttle, covering every React component
          with comprehensive unit tests to guarantee rock-solid performance and
          reliability. So, ready to elevate your survey game with Workkit? Let's
          dive into the tech side of things! 💻
          <br />
          <br />
          <span className="text-blue flex-column text-right ">Read More →</span>
        </div>
        <img src={workkit} className="w-md image" alt="workkit" />
      </div>
    </section>
  );
};

export default Highlights;
