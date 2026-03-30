import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Alpha Holding",
    description:
      "Interactive 3D Masterplan Specification. A website with 3d animation and interactive masterplan with property listings and more. This website is built for a real estate companies to showcase different propertes and listings.",
    tech: ["NextJs", "ThreeJs", "Framer Motion", "TypeScript", "GSAP"],
    code: "https://propertyseller.vercel.app/",
    live: "https://propertyseller.vercel.app/",
    thumbnail: "alphaholding.png",
    featured: true,
  },
  {
    title: "Kurillo AI Code Generator",
    description:
      "AI Powered Code generator. This website can write a project for you based on your requirements. It can write a project in any language and any framework.",
    tech: ["NextJs", "ThreeJs", "Framer Motion", "TypeScript", "GSAP"],
    code: "https://www.kurillo.com/",
    live: "https://www.kurillo.com/",
    thumbnail: "kurillo.png",
    featured: true,
  },
  {
    title: "Lifesmile.ae",
    description:
      "Complete Ecommerce website using nextjs, typescript, redux, and more. Also, Mobile app using react native that is connected with the website. And, a complete ERP system using expressjs, prisma, and more.",
    tech: ["NextJs", "ExpressJs", "Prisma", "TypeScript"],
    code: "https://www.lifesmile.ae/",
    live: "https://www.lifesmile.ae/",
    thumbnail: "lifesmile.png",
    featured: true,
  },
  {
    title: "Lifesmile Mobile APP",
    description:
      "Complete Ecommerce mobile app using react native with expo and typescript. MultiLanguage support, RTL support, and more.",
    tech: ["React Native", "Expo", "Nativewind", "TypeScript"],
    code: "https://apps.apple.com/us/app/lifesmile-ae/id6444078111",
    live: "https://apps.apple.com/us/app/lifesmile-ae/id6444078111",
    thumbnail: "app_image.png",
    featured: false,
  },

  {
    title: "Phytomed Nepal",
    description:
      "The largest chemical database where you can find all about diseases, their symptoms and its natural herbal remedies with chemical demonstration of those remedies",
    tech: ["MERN", "Front-end", "Back-end"],
    code: "https://www.phytomednepal.com/",
    live: "https://www.phytomednepal.com/",
    thumbnail: "phytomed.png",
    featured: false,
  },
  {
    title: "Sothebys Realty",
    description:
      "Real estate website with 3d animation and interactive masterplan with property listings and more. This website is built for a real estate companies to showcase different propertes and listings.",
    tech: ["NextJs", "ThreeJs", "Framer Motion", "TypeScript", "GSAP"],
    code: "https://sothebysrealty.ae/",
    live: "https://sothebysrealty.ae/",
    thumbnail: "sothebys.png",
    featured: false,
  },
];
