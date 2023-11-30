import c from './projects.module.scss'
import { container, item, image } from '../utils/animation'
import { motion } from 'framer-motion'
import mapper from '../../../assets/mapper.png'
import { useMemo } from 'react'
import { randomIntFromRange } from '../utils/utils'
import star from '../../../assets/star.svg'

const Mapper = () => {
  const title = `COURSE MAPPER`
  const description = `UX DESIGN / UI DESIGN / FRONT END DEV`

  const starArray = useMemo(() => {
    return Array.from({ length: 20 }, (v, i) => (
      <div
        className={c.star}
        key={i}
        style={{
          top: `${randomIntFromRange(0, window.innerHeight)}px`,
          left: `${randomIntFromRange(0, window.innerWidth)}px`,
        }}
      >
        <img src={star} alt="star" />
      </div>
    ))
  }, [])
  const circleArray = useMemo(() => {
    return Array.from({ length: 10 }, (v, i) => (
      <div
        className={c.smallCircle}
        key={i}
        style={{
          top: `${randomIntFromRange(0, window.innerHeight)}px`,
          left: `${randomIntFromRange(0, window.innerWidth)}px`,
        }}
      ></div>
    ))
  }, [])
  return (
    <div className={[c.projectContainer, c.leftAlign].join(' ')}>
      <div className={c.titleContainer}>
        <div className={[c.content, c.leftAlign].join(' ')}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <div className={c.pictureContainer}>
              <motion.div variants={image}>
                <img src={mapper} alt="" />
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
      <div className={c.starsContainer}>{starArray}</div>
      <div className={c.starsContainer}>{circleArray}</div>
    </div>
  )
}
export default Mapper
