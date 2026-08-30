import { useState } from 'react'
import './Capabilities.css'

function Capabilities() {
  const [active, setActive] = useState(0)

  const capabilities = [
    {
      number: '01',
      title: 'WEB EXPERIENCES',
      description:
        'Responsive websites and modern interfaces focused on clarity, usability and performance.',
    },
    {
      number: '02',
      title: 'SOFTWARE SYSTEMS',
      description:
        'Practical software systems designed to solve real problems with clean and reliable architecture.',
    },
    {
      number: '03',
      title: 'INTERACTIVE UI',
      description:
        'Interactive interfaces with thoughtful motion, transitions and details that improve the experience.',
    },
    {
      number: '04',
      title: 'FULL-STACK PRODUCTS',
      description:
        'Complete web products connecting frontend interfaces, backend systems and databases.',
    },
  ]

  return (
    <section className="capabilities-section" id="capabilities">

      {/* HEADER */}

      <div className="capabilities-header">
        <span>03 / CAPABILITIES</span>
        <span>SELECT AN AREA</span>
      </div>


      {/* MAIN */}

      <div className="capabilities-container">

        {/* LEFT */}

        <div className="capabilities-title">

          <p>WHAT I</p>

          <h2>
            CAN
            <br />
            BUILD<span>?</span>
          </h2>

        </div>


        {/* RIGHT */}

        <div className="capabilities-list">

          {capabilities.map((item, index) => (

            <div
              className={`capability-item ${
                active === index ? 'active' : ''
              }`}
              key={item.number}
              onMouseEnter={() => setActive(index)}
            >

              <span className="capability-number">
                {item.number}
              </span>


              <div className="capability-info">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {active === index && item.description}
                </p>

              </div>


              <span className="capability-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* RADAR */}

      <div className="capability-radar">

        <div className="radar-ring radar-ring-one"></div>

        <div className="radar-ring radar-ring-two"></div>

        <div className="radar-ring radar-ring-three"></div>

        <div
          className="radar-point"
          style={{
            transform: `rotate(${active * 90}deg) translateY(-105px)`,
          }}
        >
          <span></span>
        </div>

      </div>


      {/* FOOTER */}

      <div className="capabilities-footer">

        <span>
          HOVER TO EXPLORE
        </span>

        <span>
          PRAVEEN / 2026
        </span>

      </div>

    </section>
  )
}

export default Capabilities