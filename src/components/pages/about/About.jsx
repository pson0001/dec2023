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

  const subtitle = `HELLO,你好`
  const title = `I'm Ping. I'm a passionate product designer and developer, based in Australia. I transform ideas into beautiful and engaging products that connect the vision with emotions 🥰.`

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
