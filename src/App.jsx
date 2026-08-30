import { useEffect, useState } from 'react'

import Hero from './components/Hero'
import Identity from './components/Identity'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  })

  const [cursorActive, setCursorActive] = useState(false)

  const [showHome, setShowHome] = useState(false)


  /* =========================================
     GLOBAL CURSOR
  ========================================= */

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      })
    }


    const handleMouseOver = (event) => {
      const target = event.target.closest(
        'a, button, .project-item, .capability-item'
      )

      setCursorActive(Boolean(target))
    }


    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    window.addEventListener(
      'mouseover',
      handleMouseOver
    )


    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      window.removeEventListener(
        'mouseover',
        handleMouseOver
      )
    }
  }, [])


  /* =========================================
     FLOATING HOME BUTTON
  ========================================= */

  useEffect(() => {
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
  }, [])


  return (
    <>

      {/* =====================================
          GLOBAL CUSTOM CURSOR
      ===================================== */}

      <div
        className={`global-cursor ${
          cursorActive
            ? 'cursor-active'
            : ''
        }`}
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      >

        <div className="global-cursor-dot"></div>

        <div className="global-cursor-ring"></div>

      </div>


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