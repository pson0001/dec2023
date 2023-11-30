import c from './projects.module.scss'
import { container, item, image } from '../utils/animation'
import { motion } from 'framer-motion'
import peerview from '../../../assets/peerview.png'

const Peerview = () => {
  const title = `PEERVIEW`
  const description = `UX DESIGN / UI DESIGN / FRONT END DEV`

  return (
    <div className={c.projectContainer}>
      <div className={c.titleContainer}>
        <div className={c.content}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <div className={c.pictureContainer}>
              <motion.div variants={image}>
                <img src={peerview} alt="" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
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
export default Peerview
