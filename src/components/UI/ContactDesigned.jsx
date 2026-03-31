import { FiArrowDownRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function ContactDesigned() {
  return (
    <div className="flex items-center justify-end gap-2 rounded-full p-1 bg-amber-500 pl-3">
        <div className="text-white">
          Contact
        </div>
             <motion.div whileHover={{rotate: '-45deg'}} className="p-2 bg-white rounded-full">
              <FiArrowDownRight size={20}/>
             </motion.div>
    </div>
  )
}
