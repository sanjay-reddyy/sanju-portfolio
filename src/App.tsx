import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import IntroScreen from "./components/IntroScreen";
import SplashScreen from "./components/SplashScreen";

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
  const [showIntro, setShowIntro] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

useEffect(() => {
  const introTimer = setTimeout(() => {
    setShowIntro(false);
  }, 2000);

  const splashTimer = setTimeout(() => {
    setShowSplash(false);
  }, 5000);

  return () => {
    clearTimeout(introTimer);
    clearTimeout(splashTimer);
  };
}, []);

return (
  <>
    <IntroScreen show={showIntro} />

    {!showIntro && (
      <SplashScreen show={showSplash} />
    )}

    {!showSplash && (
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
    )}
  </>
);
}

export default App;