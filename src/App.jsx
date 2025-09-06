import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './components/NavBar';
import LogoSection from './Sections/LogoSection';
import FeatureCards from './Sections/FeatureCards';
import EducationSection from './Sections/EducationSection';
import TechStack from './Sections/TechStack';
import Contact from './Sections/Contact';



const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <EducationSection />
    <TechStack />
    <Contact />
    </>
  )
}

export default App
