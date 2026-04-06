import { Link as ScrollLink } from 'react-scroll';
import { motion } from "motion/react";

export default function Button({ variant, children }) {
  if (variant === 'primary') {
    return (
      <motion.button
      whileHover={{y: -2}}
        className="bg-green text-black mono-font py-4 px-8 rounded cursor-pointer hover:shadow-lg shadow-green transition-shadow duration-300">
        <ScrollLink
          to={'project'} // '/about' dan '/' ni olib tashlaydi, 'about' qoladi
          smooth={true}
          duration={1000}
          offset={-70} // Navbar balandligini hisobga oling
          spy={true}   // Qaysi bo'limdaligini kuzatib boradi
          activeClass="text-green" // Shu bo'limga yetganda rang o'zgarishi uchun
        >
          {children}
        </ScrollLink>
      </motion.button>
    );
  } else if (variant === 'outline') {
    return (
      <button className="bg-transparent text-white mono-font py-4 px-8 rounded border cursor-pointer border-gray-700 hover:border-green hover:text-green transition-colors duration-300">
        <ScrollLink
          to={'contact'} // '/about' dan '/' ni olib tashlaydi, 'about' qoladi
          smooth={true}
          duration={1000}
          offset={-70} // Navbar balandligini hisobga oling
          spy={true}   // Qaysi bo'limdaligini kuzatib boradi
          activeClass="text-green" // Shu bo'limga yetganda rang o'zgarishi uchun
        >
          {children}
        </ScrollLink>
      </button>
    );
  }
}
