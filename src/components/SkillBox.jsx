import { delay, motion } from "framer-motion";
export default function SkillBox() {
  return (
    <div>
        <div className="group-hover:border-green border-2 p-4 rounded-lg transition duration-300 cursor-pointer">
            <p className="text-3xl text-green hover:text-green-500">Java Script</p>
            <motion.span className="block h-0.5 bg-green" 
            initial={{ width: 0 }} 
            whileInView={{ width: "85%" }}
            transition={{duration: 1}}
            ></motion.span>
        </div>
    </div>
  )
}
