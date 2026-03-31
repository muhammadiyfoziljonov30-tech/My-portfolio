import { easeInOut, motion } from "motion/react"
export default function Home() {
  return (
    <section className="bg-black">
      <div className="container flex items-center justify-between">
        <div className="border border-0.5 border-white rounded-2xl">
          <div className="border-b bg-white-20 hover:backdrop-blur text-white rounded-2xl">
            <motion.h1 initial={{ opacity: 0 }}
              animate={{ opacity: 10 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}

              className="text-5xl my-font py-20 pl-20 cursor-pointer">Assalamu Alaykum!</motion.h1>
          </div>
          <motion.p initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-xl mt-10 max-w-140 text-white p-5">
            You've arrived at the portfolio of <span className="font-bold">Muhammadiy</span> - a full stack freelance designer, creative developer and strategist based in Andijan, Uzbekistan.
            Feel free to explore my work and a few of my favourite things!
          </motion.p>
        </div>
        <motion.div animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5,   
            repeat: Infinity,   
            repeatType: "loop",   
            ease: "easeInOut"  
          }}
          className="max-w-150 mt-40 ">
          <img src="./Man.jpg" alt="img" className="rounded-full"/>
        </motion.div>
      </div>
    </section>
  )
}
