import { useEffect, useState } from 'react'

import transition from '../../layout/transition'
import c from './project.module.scss'
import library from '../../assets/projects/library-browser.png'
import components from '../../assets/projects/components.png'
import componentsTwo from '../../assets/projects/components-2.png'
import Footer from '../footer/Footer'
import Background from '../home/projects/Background'

const Library = () => {
  useEffect(() => {
    let timer1 = setTimeout(() => window.scrollTo(0, 0), 0)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

  const [height, setHeight] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setHeight(document.body.scrollHeight)
    }, 100)
  }, [])
  return (
    <>
      {' '}
      <Background height={height} />
      <div className={c.projectContainer}>
        <div className={c.project}>
          <div className={c.projectTitle}>
            <span className={c.subLabel}>PROJECT NAME</span>
            <span className={c.title}>REACT COMPONENT LIBRARY</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>
              UI Design, Frontend Development, Accessibility Testing
            </span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              Recognizing the potential for numerous reusable components, two
              other developers and I started on creating a Monash React
              component library. This initiative aims to facilitate component
              sharing across different projects, streamlining development
              efforts and avoiding unnecessary duplication of work.
            </span>
          </div>
        </div>
        <div className={c.projectImg}>
          <img src={library} alt="peerview" />
        </div>
        <div className={c.projectContent}>
          <div className={c.numberContainer}>
            <span>Since 2022, The react component library has</span>
            <div className={c.projectHighlight}>
              <div>
                <span className={c.subLabel}>CREATED</span>
                <span className={c.number}>40+</span>
                <span>components</span>
              </div>
              <div>
                <span className={c.subLabel}>USED IN</span>
                <span className={c.number}>8</span>
                <span>web applications</span>
              </div>
              <div>
                <span className={c.subLabel}>COMPLIANT WITH</span>
                <span className={c.number}>WCAG</span>
                <span>Accessibility standards</span>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>LEARNING</div>

            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>Start from scratch</div>
                <div className={c.subDescription}>
                  Throughout this process, I've gained valuable insights into
                  function extraction, optimal naming conventions, and enhanced
                  understanding of accessibility principles. These lessons have
                  not only enriched my design and development skills but also
                  equipped me with the ability to create more efficient,
                  user-friendly, and inclusive digital experiences.
                </div>
              </div>
              <div>
                <div className={c.subTitle}>Accessibility</div>
                <div className={c.subDescription}>
                  I have spent a lot of time ensuring that the components are
                  inclusive and usable for every user, regardless of their
                  abilities. It is incredibly rewarding to witness individuals
                  successfully navigating applications using only a keyboard or
                  their hearing abilities. I am committed to continuing my work
                  on enhancing accessibility in the digital world, focusing on
                  both design and development aspects.
                </div>
              </div>
            </div>
          </div>

          <div className={c.section}>
            <div className={c.title}>SHOWCASE</div>

            <div className={c.subSection}>
              <div>
                <div className={c.projectImg}>
                  <img src={components} alt="components" className={c.inline} />
                </div>
                <div className={c.projectImg}>
                  <img
                    src={componentsTwo}
                    alt="components"
                    className={c.inline}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        left={{ to: '/monash-peerview', name: 'PEERVIEW' }}
        right={{
          to: '/',
          name: 'BACK TO HOME',
        }}
      />
    </>
  )
}

export default transition(Library)
