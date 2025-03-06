import { motion } from "framer-motion";
import { socialMedia } from "../constants/index";

export default function Hero() {
  const variants = {
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 50,
      },
      opacity: 1,
    },
    hidden: { x: -200, opacity: 0 },
  };

  const imageVariants = {
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
      opacity: 1,
    },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <section className="flex gap-12 sm:justify-between sm:flex-row flex-col items-center max-container px-4 sm:px-16 h-[100vh] mt-28 sm:mt-0">
      <motion.div
        className="text-4xl font-bold flex flex-col gap-7 "
        initial="hidden"
        whileInView="visible"
        variants={variants}
      >
        <motion.h1 variants={variants}>
          <motion.span className="" variants={variants}>
            Hello! I&apos;m HAMZA
          </motion.span>
        </motion.h1>
        <motion.h1 variants={variants}>
          <motion.span
            className="bg-secondy px-2 text-black text-6xl leading-21 md:leading-none"
            variants={variants}
          >
            Web & Front End
          </motion.span>
        </motion.h1>
        <motion.h1 variants={variants}>
          <motion.span
            className="text-secondy px-2 text-5xl"
            variants={variants}
          >
            Developper
          </motion.span>
        </motion.h1>
        <motion.div variants={variants} className="flex gap-12">
          {socialMedia.map((e) => (
            <div
              className="bg-secondy rounded-full flex justify-center items-center p-2.5"
              key={e.alt}
            >
              <a href="">
                <img src={e.src} alt={e.alt} width={32} />
              </a>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
      >
        <div className="relative bg-black flex justify-center items-center rounded-xl after:content-[''] p-8 after:absolute after:h-[100%] after:w-[100%] after:rounded-md after:bg-transparent after:border-[32px] after:-z-10 after:border-primary after:blur-2xl after:opacity-30 shadow-ligh">
          <img
            src="/images/undraw_hello_ccwj.svg"
            alt="portfolio-image"
            className="h-[300px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
