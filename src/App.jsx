import React, { Suspense } from "react";
import "./app.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";

// Lazy load below-the-fold components
const About = React.lazy(() => import("./sections/About"));
const Skills = React.lazy(() => import("./sections/Skills"));
const Experience = React.lazy(() => import("./sections/Experience"));
const Project = React.lazy(() => import("./sections/Project"));
const Contact = React.lazy(() => import("./sections/Contact"));
const AnimatedCursor = React.lazy(() => import("./components/AnimatedCursor"));

const App = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <AnimatedCursor />
      </Suspense>
      
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={<div className="min-h-screen" />}>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experiences">
          <Experience />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
};

export default App;
