import './Identity.css'

function Identity() {
  return (
    <section className="identity-section" id="identity">

      {/* =====================================
          TOP BAR
      ===================================== */}

      <div className="identity-header">

        <span>
          02 / IDENTITY
        </span>

        <span>
          WHO I AM
        </span>

      </div>


      {/* =====================================
          MAIN
      ===================================== */}

      <div className="identity-container">

        {/* LEFT */}

        <div className="identity-title">

          <p className="identity-eyebrow">
            DIGITAL BUILDER
          </p>

          <h2>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            EXPERIENCES.
          </h2>

        </div>


        {/* RIGHT */}

        <div className="identity-content">

          <p className="identity-intro">
            I'm Praveen, a developer who enjoys
            turning ideas into useful and engaging
            digital experiences.
          </p>


          <p className="identity-text">
            I like understanding how things work,
            building them from scratch and
            continuously improving the details that
            make a product feel better to use.
          </p>


          {/* METADATA */}

          <div className="identity-meta">

            <div className="meta-item">

              <span>
                BASED IN
              </span>

              <strong>
                INDIA
              </strong>

            </div>


            <div className="meta-item">

              <span>
                FOCUS
              </span>

              <strong>
                SOFTWARE / WEB
              </strong>

            </div>


            <div className="meta-item">

              <span>
                STATUS
              </span>

              <strong>
                AVAILABLE
              </strong>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          LARGE NUMBER
      ===================================== */}

      <div className="identity-number">
        02
      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <div className="identity-footer">

        <span>
          BUILDING WITH PURPOSE
        </span>

        <span>
          PRAVEEN / 2026
        </span>

      </div>

    </section>
  )
}

export default Identity