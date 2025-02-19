import React from 'react'
import Navbar from '../assets/components/Navbar'
import Hero from './HomeComponents/Hero'
import Tech from './HomeComponents/Tech'
import Projects from './HomeComponents/Projects'
import Profile from './HomeComponents/Profile'
import Contact from './HomeComponents/Contact'
import Footer from '../assets/components/Footer'

const Home = () => {
  return (
    <div className='bg-[#f9f9f9] dark:bg-[#000810]'>
        <div className='h-screen md:h-[80vh] lg:h-screen dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative'>
            <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000810] bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] '></div>
                <Navbar />
                <Hero />
            </div>
        <Tech />
        <Projects />
        <Profile />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home