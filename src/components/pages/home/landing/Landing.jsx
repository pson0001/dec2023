import c from './landing.module.scss'
import { container, item } from '../utils/animation'
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const Landing = ({ landingRef }) => {
  const subTitle = `HI, I'M`
  const title = `PING S   NG`
  const description = `I’M A PASSIONATE PRODUCT DESIGNER AND DEVELOPER, BASED IN AUSTRALIA. I TRANSFORM IDEAS INTO BEAUTIFUL AND ENGAGING PRODUCTS THAT CONNECT THE VISION WITH EMOTIONS.`

  return (
    <div className={c.landingContainer}>
      <div className={c.intro}>
        <div className={c.body}>
          <motion.p variants={container} initial="hidden" whileInView="visible">
            {subTitle.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            ref={landingRef}
          >
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.h1 variants={item} key={index} id={`letter-${word}`}>
                    {word}
                  </motion.h1>
                </span>
              )
            })}
          </motion.div>

          <motion.p variants={container} initial="hidden" whileInView="visible">
            {description.split(' ').map((word, index) => {
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
    </div>
  )
}
export default Landing
