import c from './project.module.scss'
import { container, item } from '../utils/animation'
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const Project = ({ projectRef }) => {
  const title = `PR JECTS`

  return (
    <div className={c.landingContainer}>
      <div className={c.intro}>
        <div className={c.body}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.h1
                    variants={item}
                    key={index}
                    ref={word == 'R' ? projectRef : null}
                  >
                    {word}
                  </motion.h1>
                </span>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Project
