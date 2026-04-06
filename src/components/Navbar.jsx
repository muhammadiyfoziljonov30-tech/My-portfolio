import { motion } from "motion/react";
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const links = [
    {
      name: 'About',
      path: 'about'
    },
    {
      name: 'Projects',
      path: 'project'
    },
    {
      name: 'Skills',
      path: 'skills'
    },
    {
      name: 'Contact',
      path: 'contact'
    }
  ]

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className="bg-black border-b border-b-gray-700 border-b-0.5 fixed w-full z-10">
      <motion.div initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut'}}
        className="flex items-center justify-between container">
        <div onClick={scrollToTop} className="text-green cursor-pointer">
          logo
        </div>
        <div>
          <ul className="flex items-center py-4 gap-8">
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                <ScrollLink
                  to={link.path.replace('/', '')} // '/about' dan '/' ni olib tashlaydi, 'about' qoladi
                  smooth={true}
                  duration={1000}
                  offset={-70} // Navbar balandligini hisobga oling
                  spy={true}   // Qaysi bo'limdaligini kuzatib boradi
                  activeClass="text-green" // Shu bo'limga yetganda rang o'zgarishi uchun
                  className="cursor-pointer text-gray-700 font-bold mono-font hover:text-green transition-colors"
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  )
}
