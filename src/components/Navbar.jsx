import { NavLink } from "react-router";
import { motion } from "motion/react";

export default function Navbar() {
  const links = [
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Projects',
      path: '/project'
    },
    {
      name: 'Skills',
      path: '/skills'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]
  return (
    <nav 
    className="bg-[#0A0F1C] border-b border-b-gray-700 border-b-0.5">
      <motion.div initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 1.5, ease: 'easeInOut'}}
 className="flex items-center justify-between container">
        <NavLink to={'/'} className={`text-white`}>logo</NavLink>
        <div>
          <ul className="flex items-center py-4 gap-8">
            {links.map((link, index) => (
              <li 
                key={index}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "text-green font-bold " : "text-gray-500 font-bold "}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  )
}
