'use client'

import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div
      className="bg-black text-white py-[72px] text-center sm:py-24"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            className="hidden lg:block absolute top-6 left-[calc(70%+0px)]"
            alt=""
          />
        </motion.div>
        <motion.div style={{ translateY }}>
        <Image
          src={emojiStarImage}
          className="hidden lg:block absolute -top-[120px] right-[calc(75%+0px)]"
          alt=""
        />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-center text-xl text-white/70 mt-5 max-w-[438px] mx-auto px-4">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            id="form"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

//
//

export default CallToAction;
