import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">

      <div className="not-found-header">
        <span>PRAVEEN / 404</span>
        <span>PAGE NOT FOUND</span>
      </div>


      <div className="not-found-content">

        <p className="not-found-eyebrow">
          ERROR / DESTINATION NOT FOUND
        </p>

        <h1>
          4<span>0</span>4
        </h1>

        <p className="not-found-message">
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <a
          href={`${import.meta.env.BASE_URL}`}
          className="not-found-home"
        >
          <span>BACK TO HOME</span>
          <span>↗</span>
        </a>

      </div>


      <div className="not-found-footer">
        <span>PRAVEEN KUMAR</span>
        <span>RETURN TO ORIGIN</span>
      </div>

    </main>
  )
}

export default NotFound