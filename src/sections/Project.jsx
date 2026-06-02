import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import MainProjectCard from "../components/MainProjectCard";
import { projects } from "../constants/index";

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mainProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <motion.div 
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="w-full max-w-[1200px] px-4 md:px-8">
        <motion.h1 
          className="section-title text-stroke mb-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          PROJECTS
        </motion.h1>
        
        {/* Main Featured Project */}
        {mainProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <MainProjectCard {...mainProject} />
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div 
          className="grid grid-temp gap-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {otherProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard {...project}/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
