import Background from '../../home/projects/Background'
import c from './free-time.module.scss'
import {
  container,
  imageSmall,
  imgContainer,
  item,
} from '../../home/utils/animation'
import { motion } from 'framer-motion'
import bag from '../../../assets/free/bag.jpg'
import boulderTwo from '../../../assets/free/boulderTwo.jpg'
import shapes from '../../../assets/free/shapes.jpg'
import flower from '../../../assets/free/flower.gif'
import yoda from '../../../assets/free/yoda.gif'
import boulderOne from '../../../assets/free/boulderOne.jpg'
import cat from '../../../assets/free/cat.jpg'
import mushroom from '../../../assets/free/mushroom.jpg'
const FreeTime = () => {
  const title = 'MY FREE TIME'
  const photoList = [
    shapes,
    flower,
    mushroom,
    yoda,
    bag,
    boulderOne,
    cat,
    boulderTwo,
  ]
  return (
    <div className={c.pageContainer}>
      <div className={c.body}>
        <motion.p variants={container} initial="hidden" whileInView="visible">
          {title.split(' ').map((word, index) => {
            return (
              <span key={index} className={c.mask}>
                <motion.span variants={item} key={index}>
                  {word}{' '}
                </motion.span>
              </span>
            )
          })}
        </motion.p>
      </div>

      <div className={c.photoContainer}>
        <div className={c.photos}>
          {photoList.map((photo, index) => {
            return (
              <motion.p
                variants={imgContainer}
                initial="hidden"
                whileInView="visible"
                key={index}
                // className={c.}
              >
                {/* <span key={index} className={c.mask}> */}
                <motion.span variants={imageSmall}>
                  <img className={c.photo} src={photo} alt="" />
                </motion.span>
                {/* </span> */}
              </motion.p>
            )
            // return <img key={index} className={c.photo} src={photo} alt="" />
          })}
        </div>

        {/* <img className={c.photo} src={shapes} alt="" />
        <img className={c.photo} src={flower} alt="" />
        <img className={c.photo} src={mushroom} alt="" />
        <img className={c.photo} src={yoda} alt="" />
        <img className={c.photo} src={bag} alt="" />
        <img className={c.photo} src={boulderOne} alt="" />
        <img className={c.photo} src={cat} alt="" />
        <img className={c.photo} src={boulderTwo} alt="" /> */}
      </div>
      <Background />
    </div>
  )
}

export default FreeTime
