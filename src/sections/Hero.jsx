import { motion } from "framer-motion";
import { socialMedia } from "../constants/index";
import { IconContext } from "react-icons";
import Button from "../components/Button";

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
    <section className="flex gap-12 lg:justify-between lg:flex-row flex-col-reverse items-center max-container px-4 lg:px-16 h-full lg:h-[100vh] mt-28 lg:mt-0">
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
            className="bg-secondary px-2 text-black text-5xl sm:text-6xl leading-18 xl:leading-none"
            variants={variants}
          >
            Web & Front End
          </motion.span>
        </motion.h1>
        <motion.h1 variants={variants}>
          <motion.span
            className="text-secondary px-2 text-3xl sm:text-5xl"
            variants={variants}
          >
            Developer
          </motion.span>
        </motion.h1>
        <motion.div variants={variants} className="flex gap-4 lg:gap-8">
          {socialMedia.map((e) => (
            <div key={e.id}>
              <IconContext.Provider
                value={{
                  color: "var(--color-primary)",
                  size: "50",
                  className:
                    "border border-primary/50 rounded-xl p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg opacity-50 hover:opacity-100 bg-transparent backdrop-blur-2xl",
                }}
              >
                <div className="flex flex-col-reverse items-center gap-2 relative cursor-pointer">
                  <a
                    href={e.url}
                    className="hover:opacity-100 transition-opacity duration-300"
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
        <div>
          <Button href="/CV.pdf" label="Download CV" />
        </div>
      </motion.div>
      <motion.div className="h-[100%]">
        <motion.div className="relative lg:p-5 ">
          <motion.div
            className="absolute -z-1 top-70 right-65 lg:top-20 lg:right-1 sm:right-74 sm:top-40
        bg-primary flex justify-center items-center rounded-full h-[200px] sm:h-[400px] sm:w-[80px] p-8 shadow-primary shadow-4xl hover:shadow-4xl transition-all duration-300 after:content-[''] after:absolute after:h-[100%] after:w-[100%] after:rounded-md after:bg-transparent after:border-[32px] after:-z-10 after:border-primary after:blur-2xl after:opacity-40"
            animate={{
              y: [0, 50, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="absolute -z-1 right-0 lg:top-60 lg:right-100 sm:-top-20 sm:-right-15 bg-primary flex justify-center items-center rounded-full h-[200px] sm:h-[400px] sm:w-[80px] p-8  transition-all duration-300"
            animate={{
              y: [0, 150, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute -z-1 -top-25 right-8 lg:top-8 lg:right-23  bg-primary-700/50 flex justify-center items-center rounded-full lg:h-[600px] lg:w-[300px] h-[550px] w-[250px] p-8 transition-all duration-300"
            animate={{
              y: [0, 200, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <img
            src="/images/heroImage.png"
            alt="portfolio-image"
            width={300}
            className="lg:relative sm:right-18 sm:top-40  transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
