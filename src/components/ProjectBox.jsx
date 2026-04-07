import { motion } from "framer-motion";

export default function ProjectBox({ title, description, languages, year }) {
    return (
        <div>
            <a href="https://www.youtube.com/watch?v=oYVgmoJl8zQ&list=RDoYVgmoJl8zQ&start_radio=1https://www.youtube.com/watch?v=oYVgmoJl8zQ&list=RDoYVgmoJl8zQ&start_radio=1">
                <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 1.5, ease: 'easeInOut'}}
                 className="flex flex-col items-center gap-4 border border-gray-700 p-6 hover:bg-gray-950 hover:border-green transition group duration-500">
                    <div className="flex flex-col items-center gap-5 text-white py-10">
                        <p>{year}</p>
                        <h1 className="sekuya-font text-4xl font-bold text-center">{title}</h1>
                        <p className="text-center mono-font text-lg text-gray-700">{description}</p>
                    </div>

                    <div className="flex items-center gap-2 ">
                        {languages.map((lang, index) => (
                            <div key={index} className="border border-gray-700 group-hover:border-green transition duration-300">
                                <p className="px-4 py-2 text-gray-700 group-hover:text-green transition-colors duration-300">{lang}</p>
                            </div>

                        ))}
                    </div>
                </motion.div>
            </a>
        </div>
    )
}
