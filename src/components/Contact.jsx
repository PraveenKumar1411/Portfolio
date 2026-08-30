import './Contact.css'

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
    >

      {/* =====================================
          TOP BAR
      ===================================== */}

      <div className="contact-header">

        <span>
          05 / CONTACT
        </span>

        <span>
          LET'S CONNECT
        </span>

      </div>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="contact-container">


        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="contact-main">

          <p className="contact-eyebrow">
            HAVE AN IDEA?
          </p>


          <h2>
            LET'S
            <br />
            <span>CREATE.</span>
          </h2>


          <p className="contact-description">
            Have a project, idea or opportunity in mind?
            Let's turn it into something meaningful.
          </p>


          {/* =====================================
              CONTACT LINKS
          ===================================== */}

          <div className="contact-links">


            {/* GITHUB */}

            <a
              href="https://github.com/PraveenKumar1411"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Open Praveen's GitHub profile"
            >

              <span className="contact-number">
                01
              </span>

              <span className="contact-name">
                GITHUB
              </span>

              <span className="contact-action">
                VIEW CODE
              </span>

              <span
                className="contact-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/praveenkumar1114"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="Open Praveen's LinkedIn profile"
            >

              <span className="contact-number">
                02
              </span>

              <span className="contact-name">
                LINKEDIN
              </span>

              <span className="contact-action">
                CONNECT
              </span>

              <span
                className="contact-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:kumarpraveengupta345@gmail.com"
              className="contact-link"
              aria-label="Send an email to Praveen"
            >

              <span className="contact-number">
                03
              </span>

              <span className="contact-name">
                EMAIL
              </span>

              <span className="contact-action">
                SAY HELLO
              </span>

              <span
                className="contact-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

            </a>

          </div>

        </div>


        {/* =====================================
            ORBITAL VISUAL
        ===================================== */}

        <div
          className="contact-orbit"
          aria-hidden="true"
        >

          <div className="contact-orbit-ring ring-one"></div>

          <div className="contact-orbit-ring ring-two"></div>

          <div className="contact-orbit-ring ring-three"></div>

          <div className="contact-orbit-core">

            <span></span>

          </div>

        </div>

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <div className="contact-footer">

        <span>
          AVAILABLE TO BUILD
        </span>

        <span>
          PRAVEEN / 2026
        </span>

        <span>
          05 / 05
        </span>

      </div>


    </section>
  )
}

export default Contact