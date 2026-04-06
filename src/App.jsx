import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <>
    <Navbar/>
      <main>
        <section id="home">
          <Home/>
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="project">
          <Project/>
        </section>

        <section id="skills">
          <Skills/>
        </section>

        <section id="contact">
          <Contact/>
        </section>
      </main>
      <Footer/>
    </>
  )
}
