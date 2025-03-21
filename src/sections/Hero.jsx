import { motion } from "framer-motion";
import { socialMedia } from "../constants/index";
import { IconContext } from "react-icons";

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
    <section className="flex gap-12 sm:justify-between sm:flex-row flex-col items-center max-container px-4 sm:px-16 h-full sm:h-[100vh] mt-28 sm:mt-0">
      <motion.div
        className="text-2xl sm:text-6xl font-bold flex flex-col sm:gap-7 gap-4"
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
            className="bg-secondy px-2 text-black text-5xl sm:text-6xl leading-18 xl:leading-none"
            variants={variants}
          >
            Web & Front End
          </motion.span>
        </motion.h1>
        <motion.h1 variants={variants}>
          <motion.span
            className="text-secondy px-2 text-3xl sm:text-5xl"
            variants={variants}
          >
            Developper
          </motion.span>
        </motion.h1>
        <motion.div variants={variants} className="flex gap-4 lg:gap-8">
          {socialMedia.map((e) => (
            <div key={e.id}>
              <IconContext.Provider
                value={{
                  color: "var(--color-primary-100)",
                  size: "50",
                  className: "border-1 border-red rounded-full p-2",
                }}
              >
                <div className="flex flex-col-reverse items-center gap-2 relative cursor-pointer">
                  <a
                    href={e.url}
                    className="hover:opacity-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.icon}
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
      >
        <div className="relative bg-black flex justify-center items-center rounded-xl after:content-[''] p-8 after:absolute after:h-[100%] after:w-[100%] after:rounded-md after:bg-transparent after:border-[32px] after:-z-10 after:border-primary after:blur-2xl after:opacity-40 shadow-ligh">
          <img
            src="/images/undraw_hello_ccwj.svg"
            alt="portfolio-image"
            className="h-[200px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
