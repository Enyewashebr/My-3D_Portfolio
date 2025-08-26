import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './components/NavBar';
import LogoSection from './Sections/LogoSection';
import FeatureCards from './Sections/FeatureCards';

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    </>
  )
}

export default App
