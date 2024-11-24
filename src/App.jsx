import React, { useEffect, useRef } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const AppStartTop = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const AppStartProjects = () => {
  const worksRef = useRef(null);

  useEffect(() => {
    worksRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      {/* Add a ref to the Works section */}
      <div ref={worksRef}>
        <Works />
      </div>
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppStartTop />} />
        <Route path="/projects" element={<AppStartProjects />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
