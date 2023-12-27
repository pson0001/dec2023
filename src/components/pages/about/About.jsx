import transition from '../../layout/transition'
import c from './about.module.scss'
import Face from './face/Face'
import { container, item } from '../home/utils/animation'
import { motion } from 'framer-motion'
import Planet from './planet/Planet'
import { useEffect } from 'react'
import Cats from './cats/Cats'
import Contact from './contact/Contact'
// import FreeTime from './freeTime/FreeTime'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const subtitle = `Hello, I’m Ping.`
  const title = `I have 5 years of experience in product design and an additional 2 years in branding design.`
  const titleTwo = `I love creating emotional designs and turning big dreams into reality.`

  return (
    <div className={c.landingContainer}>
      <Face />
      <div className={c.intro}>
        <div className={c.body}>
          <motion.p variants={container} initial="hidden" whileInView="visible">
            {subtitle.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </motion.p>
          <motion.p variants={container} initial="hidden" whileInView="visible">
            {title.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </motion.p>{' '}
          <motion.p variants={container} initial="hidden" whileInView="visible">
            {titleTwo.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </motion.p>
        </div>
      </div>
      <Planet />
      <Cats />
      <Contact />
    </div>
  )
}

export default transition(About)
