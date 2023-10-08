"use client";

import Image from "next/image";
import { Pacifico } from "next/font/google";

import { motion } from "framer-motion";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const bgAnimate = {
    hidden: {
      clipPath: "polygon(21% 27%,77% 26%,77% 77%,21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };

  const textAnimation1 = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };

  const textAnimation2 = {
    hidden: {
      x: 0,
    },
    show: (i) => ({
      x: i,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    }),
  };

  const imageAnimation = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 3.6,
        ease: "easeInOut",
      },
    },
  };

  const imageAnimateChild = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const navAnimate = {
    hidden: {
      y: "-110%",
    },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2,
      },
    },
  };

  const textParagraph = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2.8,
      },
    },
  };

  return (
    <main className="h-screen px-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 h-screen w-screen z-0"
        variants={bgAnimate}
        initial="hidden"
        animate="show">
        <Image
          src="/img/background.jpg"
          alt="background"
          fill
          priority
          sizes="
        (max-width:768px) 33vw,(max-width:1024px) 50vw,100vw"
          className="object-cover brightness-50"
        />
      </motion.div>

      <motion.nav
        className="flex justify-between items-center py-2 relative z-10"
        variants={navAnimate}
        initial="hidden"
        animate="show">
        <div
          className={`text-xl font-semibold text-yellow-200 underline
           ${pacifico.className}`}>
          BuildingPainting
        </div>
        <ul className="w-[300px] flex justify-between items-center">
          <li className="font-semibold text-[#eaeaea]">Home</li>
          <li className="font-semibold text-[#eaeaea]">Services</li>
          <li className="font-semibold text-[#eaeaea]">Paint</li>
        </ul>
      </motion.nav>

      <div className="relative top-[120px]">
        <motion.div
          className="relative left-[25%]"
          variants={textAnimation1}
          initial="hidden"
          animate="show">
          <motion.h1
            className={`text-9xl text-[#eaeaea] tracking-tighter font-bold
              ${pacifico.className}
            `}
            variants={textAnimation2}
            custom={-150}>
            Painting
          </motion.h1>
        </motion.div>
        <motion.p
          className="absolute w-[600px] text-justify right-36 top-12 text-xl text-[#eaeaea]"
          variants={textParagraph}
          initial="hidden"
          animate="show">
          <span className="text-yellow-200">The beauty of painting is</span>{" "}
          you're giving a sensation parallel to life, describing something in
          paint which gives a different feeling than reality, yet paradoxically
          enhances the viewer's experience of the world.
        </motion.p>

        <motion.div
          className="relative left-[25%]"
          variants={textAnimation1}
          initial="hidden"
          animate="show">
          <motion.h1
            className="text-9xl text-yellow-200 tracking-tighter font-bold"
            variants={textAnimation2}
            custom={100}>
            Experience
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-4 absolute bottom-4 ml-5"
        variants={imageAnimation}
        initial="hidden"
        animate="show">
        <motion.div
          className="relative w-[450px] h-[250px]"
          variants={imageAnimateChild}>
          <Image
            src="/img/image-1.jpg"
            fill
            sizes="
            (max-width:768px) 33vw,(max-width:1024px) 50vw,100vw"
            className="object-cover rounded-sm saturate-150"
          />
        </motion.div>

        <motion.div
          className="relative w-[450px] h-[250px]"
          variants={imageAnimateChild}>
          <Image
            src="/img/image-2.jpg"
            fill
            sizes="
            (max-width:768px) 33vw,(max-width:1024px) 50vw,100vw"
            className="object-cover rounded-sm saturate-150"
          />
        </motion.div>

        <motion.div
          className="relative w-[450px] h-[250px]"
          variants={imageAnimateChild}>
          <Image
            src="/img/image-3.jpg"
            fill
            sizes="
            (max-width:768px) 33vw,(max-width:1024px) 50vw,100vw"
            className="object-cover rounded-sm saturate-150"
          />
        </motion.div>

        <motion.div
          className="relative w-[450px] h-[250px]"
          variants={imageAnimateChild}>
          <Image
            src="/img/image-4.jpg"
            fill
            sizes="
            (max-width:768px) 33vw,(max-width:1024px) 50vw,100vw"
            className="object-cover rounded-sm saturate-150"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
