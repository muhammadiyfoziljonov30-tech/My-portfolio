import ProjectBox from "../components/ProjectBox";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="my-25">
      <div className="container">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="text-white text-7xl sekuya-font text-center my-10"
        >
          Featured Projects
        </motion.h1>
        <div className="grid grid-cols-2 justify-items-center">
          <ProjectBox title="ZUMAR" description="A high-performance REST API handling 1M+ daily requests with real-time sync across distributed nodes."
            languages={["JavaScript", "React", "Node.js"]} year="2026" />
          <ProjectBox title="PixelBoard" description="Collaborative whiteboard app with live cursors, infinite canvas, and offline-first architecture."
            languages={["JavaScript", "React", "Node.js"]} year="2024" />
          <ProjectBox title="DevLaunch CLI" description="Open-source scaffolding tool that bootstraps full-stack projects with best-practice configs in seconds."
            languages={["JavaScript", "React", "Node.js"]} year="2025" />
          <ProjectBox title="Moneta Finance" description="Personal finance dashboard with ML-powered spending insights and automated budget categorization."
            languages={["TypeScript", "React", "Node.js"]} year="2024" />
        </div>
      </div>
    </section>
  )
}
