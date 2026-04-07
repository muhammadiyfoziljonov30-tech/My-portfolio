import { motion } from 'framer-motion'

export default function About() {
  const about = [
    {
      id: '1',
      num: '2+',
      title: 'Years of Experience'
    },
    {
      id: '2',
      num: '15+',
      title: 'Projects Shipped'
    },
    {
      id: '3',
      num: '10k+',
      title: 'GitHub Commits'
    },
    {
      id: '4',
      num: '100%',
      title: 'Client Satisfaction'
    }
  ]
  return (
    <section id="about" className="mt-25">
      <div className="container">
        <h1 className="text-8xl text-white font-extrabold text-center">Who I Am</h1>

        <div className="mt-20">
          <div className="flex itesm-center gap-80">
            <div className='max-w-150 flex flex-col items-center gap-10'>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-gray-700 mono-font text-2xl">I'm a <span className="text-white">software developer</span> with a passion for building products that are both technically excellent and genuinely useful. I specialise in full-stack JavaScript, cloud-native architectures, and developer tooling.</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className="text-gray-700 mono-font text-2xl">I believe great software is the result of <span className="text-white">clear thinking, rigorous testing, and constant iteration.</span> Whether working solo or as part of a team, I bring curiosity, ownership, and a bias for action.</motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
                className="text-gray-700 mono-font text-2xl">When I'm not coding, I'm contributing to open source, writing about engineering practices, or exploring new tools in the ecosystem.</motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="relative flex items-center justify-center w-90 h-90 mt-10">
              {/* Aylanuvchi Dash Border (SVG) */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                whileHover={{ rotate: 200 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="transparent"
                  stroke="#00F5A0" // Chiziq rangi
                  strokeWidth="2"
                  strokeDasharray="10 5" // 10px chiziq, 5px bo'shliq
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Ichkaridagi Rasm */}
              <div className="w-70 h-70 rounded-full overflow-hidden border-2 border-gray-800">
                <img
                  src="Man.jpg"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {about.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: item.id * 0.5 }}
                key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-green hover:bg-gray-700 transition duration-300 cursor-pointer">
                <h2 className="text-4xl font-bold text-white">{item.num}</h2>
                <p className="text-gray-400 mt-2 mono-font">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
