import c from './projects.module.scss'
import { container, item, image, imgContainer } from '../utils/animation'
import { motion } from 'framer-motion'
import mapper from '../../../assets/mapper.png'

import Spline from '@splinetool/react-spline'
import Background from './Background'
import { Link } from 'react-router-dom'

const Mapper = () => {
  const title = `COURSE MAPPER`
  const description = `Generating over 60,000 personalized digital course plans for students through the efforts of course advisers`

  return (
    <div className={[c.projectContainer, c.leftAlign].join(' ')}>
      <div className={c.titleContainer}>
        <div className={[c.content, c.leftAlign].join(' ')}>
          <div className={c.leftImgContainer}>
            <motion.div
              variants={imgContainer}
              initial="hidden"
              whileInView="visible"
            >
              <div className={c.pictureContainer}>
                <motion.div variants={image}>
                  <Link to={'/monash-course-mapper'}>
                    <img src={mapper} alt="" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <div className={c.mapperBall}>
              <Spline scene="https://prod.spline.design/dbly-3QBB-fc4Icx/scene.splinecode" />
            </div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {title.split('').map((word, index) => {
              return (
                <span key={index} className={[c.mask, c.mapper].join(' ')}>
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
      <Background />
    </div>
  )
}
export default Mapper
