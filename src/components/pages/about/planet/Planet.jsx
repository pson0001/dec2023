import c from './planet.module.scss'
import { container, item } from '../../home/utils/animation'
import { motion } from 'framer-motion'
import Background from '../../home/projects/Background'
const Planet = () => {
  const subtitleOne = `A LITTLE ABOUT ME`
  const titleOne = `I bring 7 years of professional experience, with 5 years dedicated to UX/UI design and 2 years specialising in branding design.`

  const subtitleTwo = `MY VALUES`
  const titleTwo = [
    `Design with empathy, recognising needs and emotions for a human-centered experience.`,
    `Spread kindness and support others to make the world a better place.`,
    `Dream big, make it happen, or just get a step closersometimes 🤷‍♀️.`,
    `Always iterate ( because I always hate my old designs)..`,
  ]

  return (
    <div className={c.planetContainer}>
      <div className={c.intro}>
        <div className={c.body}>
          <motion.p
            variants={container}
            initial="hidden"
            whileInView="visible"
            className={c.subTitle}
          >
            {subtitleOne.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </motion.p>
          <motion.p variants={container} initial="hidden" whileInView="visible">
            {titleOne.split(' ').map((word, index) => {
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
      <div className={c.intro}>
        <div className={c.body}>
          <motion.p
            variants={container}
            initial="hidden"
            whileInView="visible"
            className={c.subTitle}
          >
            {subtitleTwo.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </motion.p>

          {titleTwo.map((title, key) => {
            return (
              <motion.p
                variants={container}
                initial="hidden"
                whileInView="visible"
                key={key}
                className={c.paragraph}
              >
                {title.split(' ').map((word, index) => {
                  return (
                    <span key={index} className={c.mask}>
                      <motion.span variants={item} key={index}>
                        {word}
                      </motion.span>
                    </span>
                  )
                })}
              </motion.p>
            )
          })}
        </div>
      </div>
      <Background />
    </div>
  )
}

export default Planet
