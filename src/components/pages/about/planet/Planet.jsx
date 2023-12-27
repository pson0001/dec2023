import c from './planet.module.scss'
import { container, item } from '../../home/utils/animation'
import { motion } from 'framer-motion'
import Background from '../../home/projects/Background'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DrawSVGPlugin from 'gsap/all'
import MotionPathPlugin from 'gsap/all'
import { useEffect } from 'react'
import useWindowSize from '../../home/utils/use-window-size'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin)

const Planet = () => {
  const windowSize = useWindowSize()
  const title = `MY EXPERIENCE`
  const experience = [
    {
      name: 'Branding Designer',
      company: '314 Design Studio',
      date: 'Jan 2015 - Dec 2016',
    },
    {
      name: 'UX Designer / Front-end Developer',
      company: 'Monash University eSolutions',
      date: 'Jan 2019 - Aug 2021',
    },
    {
      name: 'Senior UX Designer',
      company: 'Monash University eSolutions',
      date: 'Aug 2021 - Jan 2023',
    },
    {
      name: 'Principal UX Designer - Present',
      company: 'Monash University eSolutions',
      date: 'Jan 2023 - Present',
    },
  ]

  useEffect(() => {
    if (windowSize.width > 800) {
      gsap.defaults({ ease: [0.6, 0.01, -0.05, 0.9] })

      const pulses = gsap
        .timeline({
          defaults: {},
        })
        .to(
          '.ball02',
          { scale: 1.5, transformOrigin: 'center', fill: '#5A9F85' },
          0.45
        )
        .to('.text01', { opacity: 1 }, 0.45)
        .to('.text011', { opacity: 1 }, 0.45)

        .to(
          '.ball03',
          { scale: 1.5, transformOrigin: 'center', fill: '#ECAD62' },
          1.0
        )
        .to('.text02', { opacity: 1 }, 1.0)
        .to('.text021', { opacity: 1 }, 1.0)

        .to(
          '.ball04',
          { scale: 1.5, transformOrigin: 'center', fill: '#F47B93' },
          1.9
        )
        .to('.text03', { opacity: 1 }, 1.9)
        .to('.text031', { opacity: 1 }, 1.9)

        .to(
          '.ball05',
          { scale: 1.5, transformOrigin: 'center', fill: '#45A1F6' },
          3.4
        )
        .to('.text04', { opacity: 1 }, 3.4)
        .to('.text041', { opacity: 1 }, 3.4)

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#svg',
            scrub: true,
            start: 'top center',
            end: 'bottom center',
          },
        })
        .to(
          '.ball01',
          {
            motionPath: {
              path: '.theLine',
              align: '.theLine',
              alignOrigin: [0.5, 0.5],
            },
            duration: 4,
          },
          0
        )
        .add(pulses, 0)
    }
  }, [windowSize])
  return (
    <div className={c.planetContainer}>
      <div className={c.intro}>
        <div className={c.body}>
          <motion.p variants={container} initial="hidden" whileInView="visible">
            {title.split(' ').map((word, index) => {
              return (
                <span key={index} className={c.mask}>
                  <motion.span variants={item}>{word}</motion.span>
                </span>
              )
            })}
          </motion.p>
        </div>
        {windowSize.width && windowSize.width <= 800 ? (
          <div className={c.body}>
            {experience.map((item, index) => {
              return (
                <div key={index}>
                  <motion.p
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className={c.subTitle}
                    key={index}
                  >
                    {item.name.split(' ').map((word, index) => {
                      return (
                        <span key={index} className={c.mask}>
                          <motion.span variants={item}>{word}</motion.span>
                        </span>
                      )
                    })}
                  </motion.p>
                  <motion.p
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className={c.subTitleDescription}
                    key={'sub' + index}
                  >
                    {item.company.split(' ').map((word, index) => {
                      return (
                        <span key={index} className={c.mask}>
                          <motion.span variants={item}>{word}</motion.span>
                        </span>
                      )
                    })}
                  </motion.p>
                  <motion.p
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className={c.subTitleDescription}
                    key={'subDate' + index}
                  >
                    {item.date.split(' ').map((word, index) => {
                      return (
                        <span key={index} className={c.mask}>
                          <motion.span variants={item}>{word}</motion.span>
                        </span>
                      )
                    })}
                  </motion.p>
                </div>
              )
            })}
          </div>
        ) : (
          <div className={c.path}>
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="343"
              height="579"
              viewBox="0 0 343 579"
            >
              <text
                className="text01"
                x="180"
                y="105"
                fill="white"
                opacity={0}
                fontWeight={800}
                fontSize="24px"
              >
                Branding Designer
              </text>
              <text
                className="text011"
                x="180"
                y="135"
                fill="white"
                opacity={0}
              >
                314 Design Studio ( Jan 2015 - Dec 2016 )
              </text>

              <text
                className="text02"
                x="360"
                y="250"
                fill="white"
                opacity={0}
                fontWeight={800}
                fontSize="24px"
              >
                UX Designer / Front-end Developer
              </text>
              <text
                className="text021"
                x="360"
                y="280"
                fill="white"
                opacity={0}
              >
                Monash University eSolutions ( Jan 2019 - Aug 2021 )
              </text>

              <text
                className="text03"
                x="280"
                y="405"
                fill="white"
                opacity={0}
                fontWeight={800}
                fontSize="24px"
              >
                Senior UX Designer
              </text>
              <text
                className="text031"
                x="280"
                y="435"
                fill="white"
                opacity={0}
              >
                Monash University eSolutions ( Aug 2021 - Jan 2023 )
              </text>

              <text
                className="text04"
                x="190"
                y="560"
                fill="white"
                opacity={0}
                fontWeight={800}
                fontSize="24px"
                cx="158"
                cy="564"
              >
                Principal UX Designer
              </text>
              <text
                className="text041"
                x="190"
                y="590"
                fill="white"
                opacity={0}
              >
                Monash University eSolutions ( Jan 2023 - Present )
              </text>

              <path
                className="theLine"
                d="M1 1C14.3333 28.3333 59.8 87.8 135 107C229 131 323.5 166 325 253.5C326.5 341 284.5 329.5 249 405.5C213.5 481.5 159.5 466 158.5 563.5"
                fill="none"
                strokeWidth="4px"
              />
              <circle
                className="ball ball01"
                r="8"
                cx="11.5"
                cy="11.5"
                fill="white"
              ></circle>
              <circle
                className="ball ball02"
                r="12"
                cx="142.5"
                cy="110"
                fill="white"
              ></circle>
              <circle
                className="ball ball03"
                r="12"
                cx="327"
                cy="256.5"
                fill="white"
              ></circle>
              <circle
                className="ball ball04"
                r="12"
                cx="250"
                cy="406.5"
                fill="white"
              ></circle>
              <circle
                className="ball ball05"
                r="12"
                cx="158"
                cy="564"
                fill="white"
              ></circle>
            </svg>
          </div>
        )}
      </div>

      <Background />
    </div>
  )
}

export default Planet
