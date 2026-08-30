import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'STUDENT RESULT PORTAL',
    category: 'FULL-STACK SYSTEM',
    stack: 'REACT / SPRING BOOT / MYSQL',
    year: '2026',
    description:
      'A complete result management system designed for students, faculty and administrators.',
  },
  {
    number: '02',
    title: 'KL NAUKRI',
    category: 'JOB PLATFORM',
    stack: 'DJANGO / PYTHON / POSTGRESQL',
    year: '2026',
    description:
      'A job portal experience connecting job seekers and employers through a structured platform.',
  },
  {
    number: '03',
    title: 'ISCOOP',
    category: 'WEB EXPERIENCE',
    stack: 'HTML / CSS / JAVASCRIPT',
    year: '2025',
    description:
      'A clean and interactive web experience focused on discovering and exploring ice cream recipes.',
  },
  {
    number: '04',
    title: 'COURSE RECOMMENDATION',
    category: 'AI / MACHINE LEARNING',
    stack: 'PYTHON / DEEP LEARNING',
    year: '2025',
    description:
      'A recommendation system designed to suggest relevant courses using machine learning techniques.',
  },
]


function Projects() {

  const [activeProject, setActiveProject] = useState(0)

  const currentProject = projects[activeProject]


  return (

    <section
      className="projects-section"
      id="projects"
    >

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="projects-header">

        <span>
          04 / SELECTED WORK
        </span>

        <span>
          PROJECT ARCHIVE
        </span>

      </div>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="projects-container">


        {/* =====================================
            LEFT SIDE
        ===================================== */}

        <div className="projects-intro">

          <p className="projects-eyebrow">
            WHAT I'VE BUILT
          </p>


          <h2>
            SELECTED
            <br />
            <span>WORK.</span>
          </h2>


          <p className="projects-description">
            A collection of projects, systems and
            digital experiences I've built while
            exploring software and the web.
          </p>

        </div>



        {/* =====================================
            RIGHT SIDE
        ===================================== */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <button
              type="button"
              key={project.number}
              className={`project-item ${
                activeProject === index
                  ? 'active'
                  : ''
              }`}
              onMouseEnter={() =>
                setActiveProject(index)
              }
              onFocus={() =>
                setActiveProject(index)
              }
              onClick={() =>
                setActiveProject(index)
              }
            >


              {/* NUMBER */}

              <span className="project-number">
                {project.number}
              </span>


              {/* PROJECT INFORMATION */}

              <div className="project-main">

                <h3>
                  {project.title}
                </h3>


                <div className="project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.stack}
                  </span>

                  <span>
                    {project.year}
                  </span>

                </div>

              </div>


              {/* ARROW */}

              <span className="project-arrow">
                ↗
              </span>

            </button>

          ))}

        </div>

      </div>


      {/* =====================================
          PROJECT PREVIEW
      ===================================== */}

      <div className="project-preview">


        <div className="preview-number">
          {currentProject.number}
        </div>


        <div className="preview-content">

          <span>
            CURRENTLY VIEWING
          </span>


          <h4>
            {currentProject.title}
          </h4>


          <p>
            {currentProject.description}
          </p>


          <div className="preview-details">

            <span>
              {currentProject.category}
            </span>

            <span>
              {currentProject.stack}
            </span>

            <span>
              {currentProject.year}
            </span>

          </div>

        </div>


        {/* PREVIEW INDICATOR */}

        <div className="preview-indicator">

          <span></span>

        </div>

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <div className="projects-footer">

        <span>
          HOVER TO EXPLORE
        </span>

        <span>
          04 / 05
        </span>

      </div>


    </section>

  )
}


export default Projects