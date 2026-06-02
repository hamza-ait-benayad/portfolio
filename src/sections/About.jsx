import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 38 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 160, damping: 38, delay: 0.2 },
  },
};

const quickFacts = [
  { emoji: "🎓", label: "Master's Student in Software Engineering" },
  { emoji: "💻", label: "Full-Stack Developer" },
  { emoji: "🤖", label: "AI & Automation Enthusiast" },
  { emoji: "🌍", label: "Based in Agadir, Morocco" },
  { emoji: "🚀", label: "Interested in SaaS, AI & Startup Products" },
  { emoji: "📚", label: "Continuous Learner" },
];

const bioParagraphs = [
  "Hello, I'm Hamza, a Software Engineering Master's student and software developer passionate about building modern applications that solve real-world problems.",
  "My work spans web development, AI integration, and business automation. I enjoy transforming ideas into reliable digital products by combining clean software architecture, intuitive user experiences, and emerging AI technologies.",
  "Over the years, I have developed web applications, management systems, business websites, and automation solutions using technologies such as React, Next.js, Laravel, Java, and modern cloud tools. I'm particularly interested in the intersection of software engineering and artificial intelligence, where intelligent systems can help businesses become more efficient and productive.",
  "Whether working independently, collaborating with a team, or contributing to a larger product, my focus remains the same: creating scalable solutions that deliver real value to users.",
];

export default function About() {
  return (
    <div className="section">
      <div className="flex w-5/6 flex-col gap-16">

        {/* ── Section Title ── */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-extrabold text-2xl text-center sm:text-left sm:text-6xl text-stroke"
        >
          A B O U T
        </motion.h2>

        {/* ── Bio + Quick Facts ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Bio text */}
          <motion.div
            className="flex flex-col gap-5 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold text-secondary"
            >
              About Me
            </motion.h3>

            {bioParagraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-white/65 leading-relaxed text-sm sm:text-base"
              >
                {para}
              </motion.p>
            ))}

            {/* Illustration */}
         
          </motion.div>

          {/* Quick Facts card */}
          <motion.div
            className="w-full lg:w-80 xl:w-96 flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <div className="sticky top-28 rounded-2xl border border-primary/20 bg-white/3 backdrop-blur-xl p-6 shadow-xl shadow-black/30">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <h4 className="text-lg font-bold text-secondary tracking-wide">
                  Quick Facts
                </h4>
              </div>

              {/* Facts list */}
              <ul className="flex flex-col gap-3">
                {quickFacts.map((fact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 38,
                      delay: 0.3 + i * 0.07,
                    }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-xl leading-none mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      {fact.emoji}
                    </span>
                    <span className="text-sm text-white/70 group-hover:text-secondary transition-colors duration-200 leading-snug">
                      {fact.label}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="my-6 border-t border-primary/10" />

              {/* CTA */}
              <a
                href="/CV.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm bg-primary text-black text-sm font-bold tracking-wide hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
