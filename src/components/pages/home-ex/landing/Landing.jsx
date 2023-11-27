import c from './landing.module.scss'
import { container, item, itemLabel } from './animation'
import { motion } from 'framer-motion'

const Landing = () => {
  const subTitle = `Hi, I'm`
  const title = `PING SONG`
  const description = `I transform ideas into beautiful and engaging products that connect the vision with human emotions.`
  const labels = [
    { name: 'USER RESEARCH', color: '#DEFFC3' },
    { name: 'UX DESIGN', color: '#FFC9C9' },
    { name: 'UI DESIGN', color: '#FFC980' },
    { name: 'FRONT-END', color: '#A9D8EA' },
  ]
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
        <motion.div
          className={c.labels}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {labels.map((label, index) => (
            <motion.div
              variants={itemLabel}
              key={index}
              className={c.label}
              style={{ backgroundColor: label.color }}
            >
              {label.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
export default Landing
