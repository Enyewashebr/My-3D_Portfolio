import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './components/NavBar';
import LogoSection from './Sections/LogoSection';
import FeatureCards from './Sections/FeatureCards';
import EducationSection from './Sections/EducationSection';

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <EducationSection />
    </>
  )
}

export default App
