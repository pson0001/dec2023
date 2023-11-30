import c from './projects.module.scss'
import { container, item, image } from '../utils/animation'
import { motion } from 'framer-motion'
import library from '../../../assets/library.png'

const Library = () => {
  const title = `COMPONENT LIBRARY`
  const description = `UX DESIGN / UI DESIGN / FRONT END DEV`

  return (
    <div className={[c.projectContainer, c.leftAlign].join(' ')}>
      <div className={c.titleContainer}>
        <div className={[c.content, c.leftAlign].join(' ')}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={[c.mask, c.library].join(' ')}>
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
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <div className={c.pictureContainer}>
              <motion.div variants={image}>
                <img src={library} alt="" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Library
