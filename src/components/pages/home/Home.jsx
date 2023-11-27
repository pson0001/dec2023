import { useEffect, useRef } from 'react'
import c from './home.module.scss'
// import Ball from '../../assets/ball.svg'
import Landing from './landing/Landing'
import Face from './face/Face'
import useMousePosition from './useMousePosition'

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    const scroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      // eslint-disable-next-line no-unused-vars
      const Locomotive = new LocomotiveScroll()
    }
    scroll()
  })

  const moveFace = (e) => {
    console.log(e)
  }

  const mousePosition = useMousePosition()
  const faceRef = useRef()

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy
    const dx = ey - cx
    const rad = Math.atan2(dy, dx)
    const deg = (rad * 180) / Math.PI
    return deg
  }
  // useEffect(() => {
  if (faceRef.current) {
    const face = faceRef.current.getBoundingClientRect()
    const anchorX = face.left + face.width / 2
    const anchorY = face.top + face.height / 2

    const angleDeg = angle(mousePosition.x, mousePosition.y, anchorX, anchorY)
    const eyes = document.querySelectorAll('#eye')
    // const mouth = document.querySelector('#mouth')

    console.log(angleDeg)
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${180 + angleDeg}deg)`
    })
    //  mouth.style.transform = `rotate(${90 + angleDeg}deg)`s
  }
  // }, [faceRef, mousePosition])

  return (
    <div className={c.homeContainer}>
      <div className={c.faceContainer} ref={faceRef}>
        <Face />
      </div>
      <Landing />

      <div className={c.space}></div>
    </div>
  )
}

export default Home
