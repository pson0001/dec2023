import c from './ping-pong.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Ball from '../../../assets/ball.svg'
import { useRef, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

// eslint-disable-next-line react/prop-types
const PingPong = ({ extraRef }) => {
  const landingContainerRef = useRef()
  const ballRef = useRef()
  useEffect(() => {
    gsap.set(ballRef.current, { x: 100, y: 50 })
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
      .to(ballRef.current, { x: 200, y: 600 })
    gsap
      .timeline({
        scrollTrigger: {
          // eslint-disable-next-line react/prop-types
          trigger: extraRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
      })
      .to(ballRef.current, { x: 600, y: 600 })
  }, [landingContainerRef, ballRef, extraRef])

  return (
    <div className={c.landingContainer} id="gallery">
      <div className={c.placeholder} ref={landingContainerRef}></div>
      <div className={c.ball} ref={ballRef} id="ball">
        <img src={Ball} alt="ball" />
      </div>
    </div>
  )
}

export default PingPong
