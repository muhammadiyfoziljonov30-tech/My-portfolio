import { motion } from "framer-motion";
import Button from "../UI/Button";
export default function Home() {
  return (
    <section id="home" className="bg-black">
      <div className="bg-grid container border-l border-l-gray-700 border-l-0.5 border-r border-r-gray-700 border-r-0.5 flex items-center justify-between relative pt-10">
        <div className="pl-10 py-50">
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="text-green font-semibold text-3xl">
              Assalamu Alaykum!
            </motion.p>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: 'easeInOut' }}
              className="text-white text-9xl font-bold  mt-5">
              I'm <br /> <span className="text-green">Muhammadiy.</span>
            </motion.h1>
          </div>
          <div className="mt-10">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2, ease: 'easeInOut' }}
              className="text-[#6B7280] max-w-150 text-2xl text-center mono-font">Full-stack software developer crafting fast, reliable, and scalable systems. I turn complex problems into clean, maintainable code.</motion.p>
          </div>

          <div className="flex items-center gap-5 mt-10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3, ease: 'easeInOut' }}
             >
              <Button variant="primary" className="mt-10">
                View Projects
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3, ease: 'easeInOut' }}
             >
              <Button variant="outline" className="mt-10 ml-4">
              Get in Touch
            </Button>
            </motion.div>
          </div>
        </div>
        <div className="p-100 bg-[#053021] rounded-full blur-[120px] opacity-40 outline-none absolute right-0 top-20">
        </div>
      </div>
    </section>
  )
}
