import { motion } from "framer-motion";
import SkillBox from "../components/SkillBox";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="text-white text-7xl sekuya-font text-center my-10"
        >
          Skills
        </motion.h1>
        <div>
          <SkillBox />
        </div>
      </div>
    </section>
  )
}