import { useEffect, useRef, useState } from 'react'
import c from './home.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Landing from './landing/Landing'
// import PingPong from './pingpong/PingPong'
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const [amountToScroll, setAmountToScroll] = useState()

  const projectsRef = useRef()
  const wrapperRef = useRef()

  useEffect(() => {
    if (projectsRef.current) {
      setAmountToScroll(projectsRef.current.offsetWidth - window.innerWidth)
    }
  }, [projectsRef])

  useEffect(() => {
    gsap.to(projectsRef.current, {
      x: -amountToScroll,
      duration: 3,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 0%',
        end: () => `+=${amountToScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
    })
  }, [amountToScroll, projectsRef, wrapperRef])

  return (
    <div>
      {/* <PingPong extraRef={projectsRef} /> */}
      {/* <Landing /> */}
      <div className={c.wrapper} ref={wrapperRef}>
        <div className={c.projects} ref={projectsRef}>
          <h2>PROJECT ONE</h2> <h2>PROJECT TWO</h2>
        </div>
      </div>
    </div>
  )
}
export default Home
