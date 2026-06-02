import { experiences } from "../constants";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 150, damping: 30 },
  }),
};

export default function Experience() {
  return (
    <div className="section">
      <div className="flex flex-col w-5/6">
        <motion.h2
          className="section-title text-stroke"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCES
        </motion.h2>

        <div className="flex gap-0">
          {/* Timeline bar */}
          <div className="flex flex-col items-center mr-6">
            <div className="w-[2px] flex-1 bg-primary/50 rounded-full relative">
              {experiences.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[7px]"
                  style={{ top: `${(i / experiences.length) * 85 + 5}%` }}
                />
              ))}
            </div>
          </div>

          {/* Experience cards */}
          <div className="flex flex-col w-full sm:w-4/5 gap-12 pb-4">
            {experiences.map((experience, i) => (
              <motion.div
                key={experience.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={childVariants}
                className="bg-primary/5 border border-primary/20 rounded-xl p-5 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {experience.year}
                  </span>
                  <span className="text-secondary font-semibold capitalize">
                    {experience.start_date} — {experience.end_date}
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base mt-2">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
