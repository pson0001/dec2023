import c from './landing.module.scss'
import { container, item } from './animation'
import { motion } from 'framer-motion'

const Landing = () => {
  const subTitle = `Hi, I'm`
  const title = `PING S   NG`
  const description = `I’M A PASSIONATE UX/UI DESIGNER AND DEVELOPER, BASED IN AUSTRALIA. I TRANSFORM IDEAS INTO BEAUTIFUL AND ENGAGING PRODUCTS THAT CONNECT THE VISION WITH EMOTIONS.`
  // const labels = [
  //   { name: 'USER RESEARCH' },
  //   { name: 'UX DESIGN' },
  //   { name: 'UI DESIGN' },
  //   { name: 'FRONT-END' },
  // ]
  return (
    <div className={c.landingContainer}>
      <div className={c.intro}>
        <div className={c.body}>
          <motion.p variants={container} initial="hidden" animate="visible">
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
          <motion.div variants={container} initial="hidden" animate="visible">
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.h1 variants={item} key={index}>
                    {word}
                  </motion.h1>
                </span>
              )
            })}
          </motion.div>

          <motion.p variants={container} initial="hidden" animate="visible">
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
        {/* <motion.div
          className={c.labels}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {labels.map((label, index) => (
            <motion.div variants={itemLabel} key={index} className={c.label}>
              {label.name}
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </div>
  )
}
export default Landing
