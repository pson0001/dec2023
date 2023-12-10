import { useEffect, useRef } from 'react'
import CatsIllustration from '../../../assets/Cats'
import Background from '../../home/projects/Background'
import c from './cats.module.scss'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import FreeTime from '../freeTime/FreeTime'
gsap.registerPlugin(MotionPathPlugin)

const Cats = () => {
  const catsShip = useRef()
  const catsContainer = useRef()
  useEffect(() => {
    gsap.set(catsShip.current, { x: -200, y: 0, scale: 0.4 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: catsContainer.current,
          start: 'top bottom',
          end: 'bottom bottom',
          toggleActions: 'restart none reverse none',
          scrub: true,
        },
      })
      .to(catsShip.current, { x: 200, y: 100, scale: 0.7 })
  })
  return (
    <div className={c.catsContainer} ref={catsContainer}>
      <div className={c.catsShip} ref={catsShip}>
        <CatsIllustration />
      </div>
      <FreeTime />
      <Background />
    </div>
  )
}

export default Cats
