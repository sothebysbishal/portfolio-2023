import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
//
import { skills } from "@modules/Home/config/constanst";
import { fadeTop, motionStep } from "@config/motion";

const Left = () => {
  return (
    <motion.div variants={fadeTop} {...motionStep} className="col-span-3">
      <div className="space-y-4 mt-7 text-slate-400">
        <p>
          Hello! I’m Bishal Khatri, and I enjoy building things that live on the
          internet. My journey into web development started back in 2014 when I
          began experimenting with custom Mig33 themes. What started as simple
          tweaks—like creating custom buttons—quickly turned into a deep
          curiosity for how the web works, and that’s where I built my
          foundation in HTML and CSS.
        </p>
        <p>
          Today, I work as a senior full-stack developer with over eight years
          of professional experience. I have had the privilege of working at
          various companies, including a start-up where I built my own idea from
          scratch, a large IT corporation, and currently as the sole IT
          specialist in a multinational company, where I design and develop
          complete web applications, mobile apps, and ERP systems.
        </p>
        <p>
          Over the years, I’ve grown into a senior full-stack developer focused
          on building scalable, efficient, and user-centric products across web,
          mobile, and AI-driven platforms.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <div className="__skills md:pr-50">
          <ul className="grid grid-cols-1 space-y-2">
            {skills.map((e: string, i: number) => (
              <li
                key={i}
                className="gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400"
              >
                {" "}
                <IoMdArrowDropright className="text-sky-400 text-xl" /> {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
