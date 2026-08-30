import { useEffect, useState } from 'react'
import './Cursor.css'

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  })

  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        'a, button, input, textarea, select'
      )

      setHovering(Boolean(target))
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${
        hovering ? 'cursor-hover' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  )
}

export default Cursor