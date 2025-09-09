import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './components/NavBar';
import LogoSection from './Sections/LogoSection';
import FeatureCards from './Sections/FeatureCards';
// import EducationSection from './Sections/EducationSection';
import TechStack from './Sections/TechStack';
// import Contact from './Sections/Contact';
import Footer from './components/Footer';
import { Suspense, lazy } from "react";
const Contact = lazy(() => import("./Sections/Contact"));
const EducationSection = lazy(() => import("./Sections/EducationSection"));



const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    {/* <EducationSection /> */}
    <Suspense fallback={<div className="flex-center min-h-[300px]">Loading...</div>}>
      <EducationSection />
    </Suspense>
    <TechStack />
    <Suspense fallback={<div className="flex-center min-h-[300px]">Loading...</div>}>
      <Contact />
    </Suspense>
    {/* <Contact /> */}
    <Footer />
    </>
  )
}

export default App
