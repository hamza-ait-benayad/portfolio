import { motion } from "framer-motion";
import { socialMedia } from "../constants/index";
import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 40 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-[9999] bg-gradient-to-br from-background via-primary-800/70 to-background" />

      <div className="max-container w-full px-8 sm:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24">

          {/* ── Left: Text content ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              Software Engineer{" "}
              <span className="relative inline-block">
                <span className="text-primary">Building</span>
              </span>{" "}
              <span className="bg-secondary px-2 text-black">Intelligent</span>{" "}
              <span className="text-secondary">Digital Solutions</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Software Engineer specializing in full-stack development, AI
              integration, and business automation. I build scalable
              applications, intelligent systems, and digital solutions that solve
              real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-sm text-sm tracking-wide hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                View My Work
                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-bold rounded-sm text-sm tracking-wide hover:bg-primary/10 hover:border-primary transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex gap-3 mt-1">
              {socialMedia.map((e) => (
                <IconContext.Provider
                  key={e.id}
                  value={{ color: "var(--color-black)", size: "22" }}
                >
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black/30 rounded-lg p-2.5 transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-md hover:shadow-primary/20 opacity-50 hover:opacity-100 bg-white/5 backdrop-blur-sm flex items-center justify-center"
                    aria-label="Social profile"
                  >
                    {e.icon}
                  </a>
                </IconContext.Provider>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Floating blobs + hero image ── */}
          <motion.div
            className="relative w-full h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            {/* Floating pill 1 */}
            <motion.div
              className="absolute top-70 right-65 lg:top-20 lg:right-1 sm:right-74 sm:top-40
              bg-primary flex justify-center items-center rounded-full h-[200px] sm:h-[400px] sm:w-[80px] p-8
              shadow-primary shadow-4xl transition-all duration-300
              after:content-[''] after:absolute after:h-[100%] after:w-[100%] after:rounded-md
              after:bg-transparent after:border-[32px] after:-z-10 after:border-primary after:blur-2xl after:opacity-40"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating pill 2 */}
            <motion.div
              className="absolute right-0 lg:top-60 lg:right-100 sm:-top-20 sm:-right-15
              bg-primary flex justify-center items-center rounded-full h-[200px] sm:h-[400px] sm:w-[80px] p-8 transition-all duration-300"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main image blob */}
            <motion.div
              className="absolute -top-25 right-8 lg:top-8 lg:right-23 bg-primary-700/50 flex justify-center items-center rounded-full lg:h-[600px] lg:w-[300px] h-[550px] w-[250px] p-8 transition-all duration-300"
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundImage: "url(/images/heroImage.png)",
                backgroundSize: "320px",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
