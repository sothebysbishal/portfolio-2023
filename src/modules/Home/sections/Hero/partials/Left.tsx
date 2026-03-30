import React from "react";
import { motion } from "framer-motion";
//
import Button from "@components/Button";
import { fadeUpSpring } from "@config/motion";
import AnimatedTextWord from "@components/motion/AnimatedTextWord";
import AnimatedTextCharacter from "@components/motion/AnimatedTextCherecter";
import Image from "next/image";

const Left = () => {
  return (
    <div className="relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px]">
      <Image
        alt="blur cyan"
        src="/images/glassify/blur-indigo-1.png"
        width="530"
        height="530"
        decoding="async"
        data-nimg="1"
        className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
      />

      <div className="relative">
        <AnimatedTextWord text="Hi, my name is" className="text-lg" />

        <div>
          <AnimatedTextCharacter
            className="!font-medium !bg-clip-text !text-5xl !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-300"
            text="Bishal Khatri."
          />
          <AnimatedTextCharacter
            className="font-medium text-3xl sm:text-4xl tracking-normal md:text-5xl text-slate-400 mt-1"
            text="Full Stack Developer specializing"
          />
          <AnimatedTextCharacter
            className="font-medium text-3xl sm:text-4xl tracking-normal md:text-5xl text-slate-400 mt-1"
            text="in web, mobile & AI."
          />
        </div>

        <div className="my-5 md:my-8 leading-7 text-slate-400 md:text-lg max-w-3xl">
          <AnimatedTextWord text="I’m a senior full-stack developer with over eight years of professional experience delivering robust and scalable software solutions. I have strong expertise in JavaScript, TypeScript, and Python, and I’m highly proficient in modern frameworks such as React, Next.js, and Node.js. Based in Dubai, UAE, I also focus on building intelligent AI-driven systems that enhance business efficiency and user experience." />
        </div>
      </div>

      <motion.div variants={fadeUpSpring} initial="hidden" animate="visible">
        <a href="#works">
          <Button outlined> Check out my projects </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default Left;
