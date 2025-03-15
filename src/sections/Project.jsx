import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/index";

export default function Project() {
  const variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  

  return (
    <motion.div className="section">
      <motion.div className="w-5/6">
        <h1 className="section-title text-stroke">PROJECT</h1>
        <div className="grid grid-temp gap-4 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project}/>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
