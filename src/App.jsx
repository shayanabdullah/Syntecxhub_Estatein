import React, { useEffect, useState } from 'react'
import Navber from './components/navber/Navber'
import Hero from './components/Hero/Hero'
import Featured from './components/Featured/Featured'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import Loader from './components/loader/Loader'

const App = () => {
const [loading, setLoading] = useState(true)

useEffect (()=>{
const handleLoad = () => {
  if(document.readyState === 'complete') {
    setLoading(false)
  }
};
 handleLoad();

 document.addEventListener('readystatechange', handleLoad);
    return () => {
      document.removeEventListener("readystatechange", handleLoad);
    };

}, [])


if(loading) {
  return (
    <Loader/>
  )

}



  return (
 <>
 <Navber/>
 <Hero/>
 <Featured/>
 <Testimonials/>
 <FAQ/>
 <CTA/>
 <Footer/>
 </>
  )
}

export default App