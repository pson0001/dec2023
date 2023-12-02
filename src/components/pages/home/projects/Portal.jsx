import c from './projects.module.scss'
import { container, item, image, imgContainer } from '../utils/animation'
import { motion } from 'framer-motion'
import portal from '../../../assets/portal.png'
import Background from './Background'
import Spline from '@splinetool/react-spline'

const Portal = () => {
  const title = `STUDENT PORTAL`
  const description = `The New Monash University's student portal(hub) for over 80,000+ students`

  return (
    <div className={c.projectContainer}>
      <div className={c.titleContainer}>
        <div className={c.content}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={[c.mask, c.portal].join(' ')}>
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
          <div className={c.imgContainer}>
            <motion.div
              variants={imgContainer}
              initial="hidden"
              whileInView="visible"
            >
              <div className={c.pictureContainer}>
                <motion.div variants={image}>
                  <img src={portal} alt="" />
                </motion.div>
              </div>
            </motion.div>
            <div className={c.portalBall}>
              <Spline scene="https://prod.spline.design/dTDB13ONJqiJHBKf/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
      <Background />
    </div>
  )
}
export default Portal
