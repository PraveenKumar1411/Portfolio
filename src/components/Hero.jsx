import { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2

      setMouse({
        x,
        y,
      })
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])

  return (
    <main
      className="hero"
      id="home"
    >

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="navbar">

        <div className="logo">
          PRAVEEN / 01
        </div>


        <button
          className={`menu-btn ${
            menuOpen ? 'menu-open' : ''
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen
            ? 'CLOSE'
            : 'MENU'}

          <span>
            {menuOpen
              ? '×'
              : '+'}
          </span>

        </button>

      </header>


      {/* =========================================
          FULL SCREEN MENU
      ========================================= */}

      <div
        className={`menu-overlay ${
          menuOpen
            ? 'menu-visible'
            : ''
        }`}
      >

        {/* MENU TOP */}

        <div className="menu-overlay-top">

          <span>
            PRAVEEN / NAVIGATION
          </span>

          <span>
            05 SECTIONS
          </span>

        </div>


        {/* MENU NAVIGATION */}

        <nav className="menu-navigation">

          <a
            href="#home"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <span>
              01
            </span>

            <strong>
              HOME
            </strong>

            <i>
              ↗
            </i>

          </a>


          <a
            href="#identity"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <span>
              02
            </span>

            <strong>
              IDENTITY
            </strong>

            <i>
              ↗
            </i>

          </a>


          <a
            href="#capabilities"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <span>
              03
            </span>

            <strong>
              CAPABILITIES
            </strong>

            <i>
              ↗
            </i>

          </a>


          <a
            href="#work"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <span>
              04
            </span>

            <strong>
              SELECTED WORK
            </strong>

            <i>
              ↗
            </i>

          </a>


          <a
            href="#contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <span>
              05
            </span>

            <strong>
              CONTACT
            </strong>

            <i>
              ↗
            </i>

          </a>

        </nav>


        {/* MENU BOTTOM */}

        <div className="menu-overlay-bottom">

          <span>
            SELECT DESTINATION
          </span>

          <span>
            PRAVEEN / 2026
          </span>

        </div>

      </div>


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <section className="hero-content">

        <p className="eyebrow hero-reveal reveal-1">
          HELLO, I'M
        </p>


        <h1 className="hero-reveal reveal-2">

          PRAVEEN

          <br />

          KUMAR
          <span>
            .
          </span>

        </h1>


        <p className="role hero-reveal reveal-3">

          DEVELOPER

          <span>
            /
          </span>

          CREATOR

        </p>

      </section>


      {/* =========================================
          ORBITAL SYSTEM
      ========================================= */}

      <div
        className="orbital-wrapper hero-reveal reveal-4"
        style={{
          transform: `
            translate(
              ${mouse.x * 10}px,
              ${mouse.y * 10}px
            )
          `,
        }}
      >

        {/* SYSTEM LABEL TOP */}

        <div className="system-label system-label-top">
          SYSTEM / 01
        </div>


        {/* SYSTEM LABEL BOTTOM */}

        <div className="system-label system-label-bottom">
          DIGITAL IDENTITY
        </div>

{/* =========================================
    PROFILE PHOTO
========================================= */}

<div className="profile-photo-wrapper">

  <div className="profile-photo-glow"></div>

  <img
    src="/images/profile.png"
    alt="Praveen"
    className="profile-photo"
  />

</div>

        {/* SCANNING ARC */}

        <div className="scan-arc"></div>


        {/* ORBIT ONE */}

        <div className="orbit orbit-one"></div>


        {/* ORBIT TWO */}

        <div className="orbit orbit-two"></div>


        {/* ORBIT THREE */}

        <div className="orbit orbit-three"></div>


        {/* =====================================
            CENTER CORE
        ===================================== */}

        <div className="core">

          <div className="core-inner">

            <div className="core-dot"></div>

          </div>

        </div>


        {/* =====================================
            ORBIT NODE 01
        ===================================== */}

        <div className="node node-one">

          <span>
            01
          </span>

        </div>


        {/* =====================================
            ORBIT NODE 02
        ===================================== */}

        <div className="node node-two">

          <span>
            02
          </span>

        </div>


        {/* =====================================
            ORBIT NODE 03
        ===================================== */}

        <div className="node node-three">

          <span>
            03
          </span>

        </div>


        {/* =====================================
            DATA MARKERS
        ===================================== */}

        <div className="data-marker marker-one"></div>

        <div className="data-marker marker-two"></div>

        <div className="data-marker marker-three"></div>

      </div>


      {/* =========================================
          HERO FOOTER
      ========================================= */}

      <footer className="hero-footer">

        {/* STATUS */}

        <div>

          <span className="status-dot"></span>

          AVAILABLE TO BUILD

        </div>


        {/* SCROLL */}

        <div className="scroll">

          SCROLL TO EXPLORE

          <span>
            ↓
          </span>

        </div>


        {/* COUNTER */}

        <div className="counter">

          01

          <span>
            /
          </span>

          05

        </div>

      </footer>

    </main>
  )
}

export default Hero