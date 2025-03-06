import "./app.css";
import About from "./sections/About";
import Experiance from "./sections/Experiance";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experiances">
        <Experiance />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default App;
