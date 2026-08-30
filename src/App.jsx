import { useEffect, useState } from 'react'

import Hero from './components/Hero'
import Identity from './components/Identity'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import NotFound from './components/NotFound'

function App() {

  const [showHome, setShowHome] = useState(false)


  /* =========================================
     CHECK CURRENT PATH
  ========================================= */

  const basePath = import.meta.env.BASE_URL

  const currentPath =
    window.location.pathname

  const isHomePage =
    currentPath === basePath ||
    currentPath === basePath.replace(/\/$/, '')


  /* =========================================
     FLOATING HOME BUTTON
  ========================================= */

  useEffect(() => {

    if (!isHomePage) {
      return
    }


    const handleScroll = () => {

      setShowHome(
        window.scrollY >
        window.innerHeight * 0.6
      )

    }


    window.addEventListener(
      'scroll',
      handleScroll
    )


    handleScroll()


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      )

    }

  }, [isHomePage])


  /* =========================================
     404 PAGE
  ========================================= */

  if (!isHomePage) {

    return (
      <>
        <NotFound />

        <Cursor />

      </>
    )

  }


  /* =========================================
     MAIN PORTFOLIO
  ========================================= */

  return (
    <>

      {/* =====================================
          GLOBAL CUSTOM CURSOR
      ===================================== */}

      <Cursor />


      {/* =====================================
          SCROLL PROGRESS
      ===================================== */}

      <ScrollProgress />


      {/* =====================================
          FLOATING HOME BUTTON
      ===================================== */}

      <a
        href="#home"
        className={`floating-home ${
          showHome
            ? 'home-visible'
            : ''
        }`}
        aria-label="Go to home"
      >

        <span className="home-arrow">
          ↑
        </span>

        <span className="home-text">
          HOME
        </span>

      </a>


      {/* =====================================
          PORTFOLIO SECTIONS
      ===================================== */}

      <Hero />

      <Identity />

      <Capabilities />

      <Projects />

      <Contact />

    </>
  )
}

export default App