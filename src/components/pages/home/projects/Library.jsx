import c from './projects.module.scss'
import { container, item, image } from '../utils/animation'
import { motion } from 'framer-motion'
import library from '../../../assets/library.png'
import Background from './Background'

import Spline from '@splinetool/react-spline'
import useWindowSize from '../utils/use-window-size'
import { Link } from 'react-router-dom'

const Library = () => {
  const title = `COMPONENT LIBRARY`
  const description = `Enabling component sharing across diverse projects, optimizing development efforts, and preventing redundant work duplication`
  const windowSize = useWindowSize()
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
          <div className={c.leftImgContainer}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              <div className={c.pictureContainer}>
                <motion.div variants={image}>
                  <Link to={'/monash-react-component-library'}>
                    <img src={library} alt="" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            {windowSize.width >= 800 ? (
              <div className={c.mapperBall}>
                <Spline scene="https://prod.spline.design/bMMzhaIyZ7PNinXK/scene.splinecode" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Background />
    </div>
  )
}
export default Library
