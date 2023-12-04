import { useEffect, useRef, useState } from 'react'
import c from './home.module.scss'
import Landing from './landing/Landing'
import Face from './face/Face'
import useMousePosition from './useMousePosition'
import useWindowSize from './utils/use-window-size'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Project from './project/Project'
import Portal from './projects/Portal'
import Mapper from './projects/Mapper'
import Peerview from './projects/Peerview'
import Library from './projects/Library'
import Next from './next/Next'
import transition from '../../layout/transition'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Load LocomotiveScroll
  useEffect(() => {
    const scroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      // eslint-disable-next-line no-unused-vars
      const Locomotive = new LocomotiveScroll()
    }
    scroll()
  })

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

  // Put face to the correct position
  const landingRef = useRef()
  const [facePosition, setFacePosition] = useState([0, 0])
  const windowSize = useWindowSize()
  useEffect(() => {
    if (landingRef.current) {
      const target = landingRef.current.getBoundingClientRect()
      setFacePosition([`${target.left - 151}px`, `${target.top - 500 + 60}px`])
    }
  }, [windowSize])

  const landingContainerRef = useRef()
  const moveElementRef = useRef()
  const projectRef = useRef()
  const partOneRef = useRef()

  useEffect(() => {
    gsap.set(moveElementRef.current, { x: 0, y: 0 })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: partOneRef.current,
          start: 'top top',
          end: 'bottom bottom',
          toggleActions: 'restart none reverse none',
          scrub: true,
        },
      })
      .to(moveElementRef.current, {
        x: -167,
        y: window.innerHeight + 20,
      })
  }, [landingContainerRef, moveElementRef, partOneRef])

  // Cursor expand
  // const portalRef = useRef()
  // const handRef = useRef()

  // useEffect(() => {
  //   const element = portalRef.current
  //   const handleMouseEnter = () => {
  //     gsap.to(handRef.current, 0.2, {
  //       x: mousePosition.x,
  //       y: mousePosition.y,
  //       scale: 1,
  //       opacity: 1,
  //       top: '-75px',
  //       left: '-75px',
  //       ease: [0.6, 0.01, -0.05, 0.9],
  //     })
  //   }
  //   element.addEventListener('mouseenter', handleMouseEnter)
  //   return () => {
  //     element.removeEventListener('mouseenter', handleMouseEnter)
  //   }
  // }, [mousePosition, portalRef, handRef])

  // useEffect(() => {
  //   const element = portalRef.current
  //   const handleMouseLeave = () => {
  //     gsap.to(handRef.current, 0.2, {
  //       scale: 0,
  //       opacity: 0,
  //       top: '-75px',
  //       left: '-75px',
  //       ease: [0.6, 0.01, -0.05, 0.9],
  //     })
  //   }
  //   element.addEventListener('mouseleave', handleMouseLeave)
  //   return () => {
  //     element.removeEventListener('mouseleave', handleMouseLeave)
  //   }
  // }, [mousePosition, portalRef, handRef])

  // useEffect(() => {
  //   const element = portalRef.current

  //   const handleMouseMove = () => {
  //     gsap.to(handRef.current, 0.2, {
  //       x: mousePosition.x,
  //       y: mousePosition.y,
  //       ease: [0.6, 0.01, -0.05, 0.9],
  //     })
  //     //    setViewProjectLocation([mousePosition.x, mousePosition.y])
  //   }

  //   element.addEventListener('mousemove', handleMouseMove)
  //   return () => {
  //     element.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [mousePosition, portalRef, handRef])
  // console.log(mousePosition.x, mousePosition.y)
  return (
    <div className={c.homeContainer} ref={landingContainerRef}>
      {/* <div
        className={c.hand}
        ref={handRef}
        //    style={{ left: viewProjectLocation[0], top: viewProjectLocation[1] }}
      >
        View project
      </div> */}
      <div ref={partOneRef}>
        <div
          className={c.faceContainer}
          ref={moveElementRef}
          style={{ left: facePosition[0], top: facePosition[1] }}
        >
          <Face faceRef={faceRef} />
        </div>
        <Landing landingRef={landingRef} />
        <Project projectRef={projectRef} />
      </div>
      <Portal />
      <Mapper />
      <Peerview />
      <Library />
      <Next />
    </div>
  )
}

export default transition(Home)
