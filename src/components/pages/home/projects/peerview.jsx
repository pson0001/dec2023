import c from './projects.module.scss'
import { container, item, image, imgContainer } from '../utils/animation'
import { motion } from 'framer-motion'
import peerview from '../../../assets/peerview.png'
import Spline from '@splinetool/react-spline'
import Background from './Background'
const Peerview = () => {
  const title = `PEERVIEW`
  const description = `Facilitating seamless academic peer review processes across 10 faculties`

  return (
    <div className={c.projectContainer}>
      <div className={c.titleContainer}>
        <div className={c.content}>
          <div className={c.imgContainer}>
            <motion.div
              variants={imgContainer}
              initial="hidden"
              whileInView="visible"
            >
              <div className={c.pictureContainer}>
                <motion.div variants={image}>
                  <img src={peerview} alt="" />
                </motion.div>
              </div>
            </motion.div>
            <div className={c.peerviewBall}>
              <Spline scene="https://prod.spline.design/HCGtSCzA-tVcoa6z/scene.splinecode" />
            </div>
          </div>
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
      <Background></Background>
    </div>
  )
}
export default Peerview
