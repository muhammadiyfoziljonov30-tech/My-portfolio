
export default function Home() {
  return (
    <section className="bg-[#0A0F1C]">
      <div className="bg-grid container border-l border-l-gray-700 border-l-0.5 border-r border-r-gray-700 border-r-0.5 flex items-center justify-between relative pt-10">
        <div className="pl-10 py-50">
          <div>
            <p className="text-green font-semibold text-3xl">
              Assalamu Alaykum! 
            </p>
            <h1 className="text-white text-9xl font-bold mt-5">
              I'm <br /> <span className="text-green">Muhammadiy.</span>
            </h1>
          </div>
          <div className="mt-10">
            <p className="text-[#6B7280] max-w-130 text-2xl my-font">Full-stack software developer crafting fast, reliable, and scalable systems. I turn complex problems into clean, maintainable code.</p>
          </div>
        </div>
        <div className="p-100 bg-[#053021] rounded-full blur-[120px] opacity-40 outline-none absolute right-0 top-20">
        </div>
      </div>
    </section>
  )
}
