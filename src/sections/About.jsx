import { motion } from "framer-motion";
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
        <div className="flex flex-col justify-center gap-20 w-full ">
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-col sm:flex-row gap-14 ">
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={variants}
                className="font-semibold text-sm lg:text-2xl text-secondary m-auto leading-8 bg-transparent backdrop-blur-[100px] rounded-2xl p-4"
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
                <div className="relative w-full bg-transparent backdrop-blur-3xl flex justify-center rounded-xl p-8">
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    variants={variants_images}
                    src="/images/undraw_dev-productivity_5wps.svg"
                    alt="Developer productivity illustration"
                    width={2000}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-primary font-bold border border-gray-900 rounded-2xl px-4 py-2 backdrop-blur-3xl bg-transparent">
                MY Skills
              </h1>
              <div className="w-full ">
                <div className="overflow-hidden slider-mask relative flex h-[60px] w-full mt-16">
                  {technologies.map((technology) => {
                    let technology_Color = "";
                    switch (technology.description) {
                      case "Java":
                        technology_Color = "var(--color-java)";
                        break;
                      case "PHP":
                        technology_Color = "var(--color-php)";
                        break;
                      case "CSS":
                        technology_Color = "var(--color-css)";
                        break;
                      case "React js":
                        technology_Color = "var(--color-reactJs)";
                        break;
                      case "Tailwind css":
                        technology_Color = "var(--color-tailwind)";
                        break;
                      case "Laravel":
                        technology_Color = "var(--color-laravel)";
                        break;
                      case "HTML":
                        technology_Color = "var(--color-html)";
                        break;
                      case "JavaScript":
                        technology_Color = "var(--color-javaScript)";
                        break;
                      default:
                        technology_Color = "white";
                        break;
                    }
                    return (
                      <motion.div
                        initial={{
                          left: `max(calc(250px * ${technologies.length}),100%)`,
                        }}
                        animate={{ left: "-250px" }}
                        transition={{
                          duration: 20,
                          ease: "linear",
                          delay:
                            (20 / technologies.length) *
                            -technologies.indexOf(technology),
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        key={technology.description}
                        className="absolute flex justify-center items-center w-[250px] h-[60px] text-black py-6 rounded-2xl border border-black cursor-pointer "
                      >
                        <div className="flex items-center gap-2 justify-center ">
                          <IconContext.Provider
                            value={{
                              color: `${technology_Color}`,
                              size: "50",
                              opacity: "50",
                            }}
                          >
                            <div className="opacity-70 flex justify-center gap-2 items-center">
                              {technology.icon}
                              <h1
                                className="text-3xl font-semibold"
                                style={{ color: technology_Color }}
                              >
                                {technology.description}
                              </h1>
                            </div>
                          </IconContext.Provider>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
