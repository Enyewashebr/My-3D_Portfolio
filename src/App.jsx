import React from 'react'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from './components/NavBar';
import LogoSection from './components/LogoSection';

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    </>
  )
}

export default App
