import { useEffect, useRef } from 'react'
import c from './home.module.scss'
import Ball from '../../assets/ball.svg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const landingContainerRef = useRef()
  const ballRef = useRef()
  useEffect(() => {
    // gsap.set(ballRef.current, {})
    gsap
      .timeline({
        scrollTrigger: {
          trigger: landingContainerRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
      })
      .to(ballRef.current, { x: 0, y: 0 })
      .to(ballRef.current, { x: 200, y: 600 })
  }, [landingContainerRef, ballRef])

  return (
    <div className={c.landingContainer} id="gallery">
      <div className={c.placeholder} ref={landingContainerRef}></div>
      <div className={c.ball} ref={ballRef} id="ball">
        <img src={Ball} alt="ball" />
      </div>
    </div>
  )
}

export default Home
