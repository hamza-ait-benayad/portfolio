import { motion } from "framer-motion";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiSpringboot, SiMysql, SiPostgresql, SiMongodb,
  SiOpenai, SiDocker, SiPostman, SiFigma,
  SiVercel, SiNetlify, SiNginx,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaLaravel, FaPhp, FaJava, FaGithub, FaGitAlt, FaLinux,
} from "react-icons/fa";
import {
  TbBrandJavascript, TbBrain, TbRobot, TbApps,
} from "react-icons/tb";
import { MdAutoFixHigh } from "react-icons/md";

/* ─── Skill categories data ─────────────────────────────── */
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    emoji: "🖥️",
    accent: "#61dbfb",          // cyan / React blue
    skills: [
      { name: "React",       icon: RiReactjsFill,      color: "#61dbfb" },
      { name: "Next.js",     icon: SiNextdotjs,        color: "#ffffff" },
      { name: "TypeScript",  icon: SiTypescript,       color: "#3178c6" },
      { name: "JavaScript",  icon: TbBrandJavascript,  color: "#f0db4f" },
      { name: "Tailwind CSS",icon: SiTailwindcss,      color: "#38bdf8" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    emoji: "⚙️",
    accent: "#f05340",          // Laravel red
    skills: [
      { name: "Laravel",     icon: FaLaravel,    color: "#f05340" },
      { name: "PHP",         icon: FaPhp,        color: "#787cb5" },
      { name: "Java",        icon: FaJava,       color: "#f89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    emoji: "🗄️",
    accent: "#4479a1",          // MySQL blue
    skills: [
      { name: "MySQL",      icon: SiMysql,      color: "#4479a1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB",    icon: SiMongodb,    color: "#47a248" },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    emoji: "🤖",
    accent: "#89ac46",          // brand primary green
    skills: [
      { name: "OpenAI API",  icon: SiOpenai,        color: "#ffffff" },
      { name: "AI Chatbots", icon: TbRobot,          color: "#89ac46" },
      { name: "RAG Systems", icon: TbBrain,          color: "#a855f7" },
      { name: "n8n Workflows",icon: MdAutoFixHigh,   color: "#ea4b71" },
      { name: "Automation",  icon: TbApps,           color: "#38bdf8" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    emoji: "🛠️",
    accent: "#f1502f",          // Git orange
    skills: [
      { name: "Git",        icon: FaGitAlt,           color: "#f1502f" },
      { name: "GitHub",     icon: FaGithub,           color: "#ffffff" },
      { name: "Docker",     icon: SiDocker,           color: "#2496ed" },
      { name: "Postman",    icon: SiPostman,          color: "#ef5b25" },
      { name: "Figma",      icon: SiFigma,            color: "#f24e1e" },
      { name: "VS Code",    icon: VscVscode, color: "#007acc" },
      { name: "Vercel",     icon: SiVercel,           color: "#ffffff" },
      { name: "Netlify",    icon: SiNetlify,          color: "#00c7b7" },
      { name: "Linux",      icon: FaLinux,            color: "#fcc624" },
      { name: "Nginx",      icon: SiNginx,            color: "#009900" },
    ],
  },
];

/* ─── Variants ──────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 30 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, type: "spring", stiffness: 200, damping: 28 },
  }),
};

/* ─── Sub-components ─────────────────────────────────────── */
function SkillBadge({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      custom={index}
      variants={badgeVariants}
      whileHover={{ scale: 1.08, y: -2 }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/8
                 hover:border-white/20 hover:bg-white/10 transition-all duration-200 cursor-default group"
    >
      <Icon size={18} style={{ color: skill.color }} className="flex-shrink-0" />
      <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white/90 whitespace-nowrap transition-colors duration-200">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryCard({ category }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl p-6 border border-white/8 bg-white/3 backdrop-blur-xl
                 overflow-hidden group transition-all duration-300
                 hover:border-white/15 hover:shadow-2xl"
      style={{
        "--accent": category.accent,
        boxShadow: "0 0 0 transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px ${category.accent}18, 0 4px 24px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 transparent";
      }}
    >
      {/* Top-left accent glow */}
      <div
        className="absolute -top-8 -left-8 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
        style={{ background: category.accent }}
      />

      {/* Card header */}
      <div className="flex items-center gap-3 mb-5 relative">
        <div
          className="w-1 h-6 rounded-full flex-shrink-0"
          style={{ background: category.accent }}
        />
        <span className="text-lg">{category.emoji}</span>
        <h3 className="text-base font-bold text-white/90 tracking-wide">
          {category.title}
        </h3>
        <span className="ml-auto text-xs font-mono text-white/25 tabular-nums">
          {String(category.skills.length).padStart(2, "0")}
        </span>
      </div>

      {/* Badges */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {category.skills.map((skill, i) => (
          <SkillBadge key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function Skills() {
  return (
    <div className="section">
      <div className="flex flex-col w-5/6 gap-14">

        {/* Title block */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 160, damping: 36 }}
        >
          <h2 className="section-title text-stroke">
            S K I L L S
          </h2>
          <p className="text-white/45 text-sm sm:text-base max-w-2xl leading-relaxed">
            A collection of technologies and tools I use to build scalable web
            applications, AI systems, and automation solutions.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}
