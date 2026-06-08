import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certification";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
<>
  <Navbar />
  <Hero />
  <About />
  <TechStack />
  <Experience />
  <Achievements />
  <Projects />
  <Certifications />
  <Contact />
  <Footer />
</>
  );
}

export default App;