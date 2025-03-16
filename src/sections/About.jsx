import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import { technologies } from "../constants/index";

export default function About() {
  const variants_images = {
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

  return (
    <div className="section">
      <div className="flex w-5/6 flex-col">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="font-extrabold text-2xl text-center sm:text-left sm:text-6xl mb-20 text-stroke"
        >
          A B O U T
        </motion.h1>
        <div className="flex flex-col justify-center gap-20 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-14">
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={variants}
                className="font-semibold text-sm lg:text-2xl text-secondy m-auto leading-8"
              >
                👋 Welcome to my portfolio website! I&apos;m a front-end web
                developer with a passion for creating stunning, responsive
                websites and landing pages. With a strong foundation in HTML,
                CSS, and JavaScript, and a keen eye for design, I specialize in
                building user-friendly and visually appealing web experiences.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants_images}
              >
                <div className="relative w-full bg-black flex justify-center rounded-xl after:content-[''] p-8  after:absolute after:top-0 after:h-full after:w-full after:rounded-md after:bg-transparent after:border-[20px] after:-z-10 after:border-primary after:blur-3xl after:opacity-50">
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={variants_images}
                    src="/images/undraw_dev-productivity_5wps.svg"
                    alt="sd"
                    width={2000}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-primary-900 font-bold">MY Skills</h1>
              <div className="w-full">
                <div
                  className={`overflow-hidden slider-mask relative flex h-[50px] w-full min-w[${
                    250 * 3
                  }px] mt-16`}
                >
                  {technologies.map((technologie, key) => (
                    <motion.div
                      initial={{ left: `max(calc(250px * ${technologies.length}),100%)` }}
                      animate={{ left: "-250px" }}
                      transition={{
                        duration: 10,
                        ease: "linear",
                        delay: (10 / technologies.length) * -key,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      key={key}
                      className="absolute flex justify-center items-center w-[250px] h-[50px]  text-black rounded-2xl"
                    >
                      <div className="flex items-center gap-2 justify-center">
                        <IconContext.Provider
                          value={{
                            color: "var(--color-primary-900)",
                            size: "60",
                          }}
                        >
                          {technologie.icon}
                          <h1 className="text-primary-900 text-3xl font-semibold">
                            {technologie.description}
                          </h1>
                        </IconContext.Provider>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
