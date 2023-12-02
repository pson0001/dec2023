/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react'
import Background from '../../home/projects/Background'
import c from './face.module.scss'
import useMousePosition from '../../home/useMousePosition'
import Astronaut from '../../../assets/Astronaut'

const Face = () => {
  // Eye rotate following mouse
  const mousePosition = useMousePosition()
  const faceRef = useRef()

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy
    const dx = ey - cx
    const rad = Math.atan2(dy, dx)
    const deg = (rad * 180) / Math.PI
    return deg
  }

  useEffect(() => {
    if (faceRef.current) {
      const face = faceRef.current.getBoundingClientRect()
      const anchorX = face.left + face.width / 2
      const anchorY = face.top + face.height / 2

      const angleDeg = angle(mousePosition.x, mousePosition.y, anchorX, anchorY)
      const eyes = document.querySelectorAll('#eye')
      const mouth = document.querySelector('#mouth')

      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${180 + angleDeg}deg)`
      })

      if (angleDeg >= 0 && angleDeg <= 90) {
        mouth.style.left = `26px`
        mouth.style.top = `48px`
      } else if (angleDeg > 90 && angleDeg <= 180) {
        mouth.style.left = `34px`
        mouth.style.top = `48px`
      } else if (angleDeg < -115 && angleDeg >= -180) {
        mouth.style.left = `34px`
        mouth.style.top = `52px`
      } else {
        mouth.style.left = `26px`
        mouth.style.top = `52px`
      }
    }
  }, [faceRef, mousePosition])

  useEffect(() => {
    let paths = document.querySelectorAll('path')

    for (var i = 0; i < paths.length; i++) {
      let path = paths[i]
      var length = path.getTotalLength()
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition = 'none'
      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length
      path.style.strokeDashoffset = length
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect()
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 1s ease-in-out'
      // Go!
      path.style.strokeDashoffset = '0'
    }
  }, [])

  return (
    <div className={c.decorContainer}>
      <div className={c.circlesContainer}>
        <div className={[c.circle, c.one].join(' ')}></div>
        <div className={[c.circle, c.two].join(' ')}></div>
        <div className={[c.circle, c.three].join(' ')}></div>
        <div className={[c.circle, c.four].join(' ')}></div>
        <div className={[c.circle, c.five].join(' ')}></div>
        <div className={c.face} ref={faceRef}>
          <div className={c.eyeContainer}>
            <div className={[c.eye, c.one].join(' ')} id="eye"></div>

            <div className={[c.eye, c.two].join(' ')} id="eye"></div>
          </div>
          <div className={c.mouth} id="mouth"></div>
        </div>
        <div className={c.astronaut}>
          <Astronaut />
        </div>
      </div>

      <Background />
    </div>
  )
}
export default Face
