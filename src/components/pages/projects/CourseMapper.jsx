import { useEffect, useState } from 'react'
import c from './project.module.scss'
import mapper from '../../assets/projects/course-mapper-browser.png'
import coreBefore from '../../assets/projects/core-concepts-before.png'
import coreAfter from '../../assets/projects/core-concepts-after.png'
import mapBefore from '../../assets/projects/map-before.png'
import mapAfter from '../../assets/projects/map-after.png'
import detailOne from '../../assets/projects/detail-one.png'
import detailTwo from '../../assets/projects/detail-two.png'
import detailThree from '../../assets/projects/detail-three.png'

import transition from '../../layout/transition'
import Footer from '../footer/Footer'
import Background from '../home/projects/Background'
import ReactPlayer from 'react-player'

const CourseMapper = () => {
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
      <Background height={height} />
      <div className={c.projectContainer}>
        <div className={c.project}>
          <div className={c.projectTitle}>
            <span className={c.subLabel}>PROJECT NAME</span>
            <span className={c.title}>COURSE MAPPER</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>
              User research, UX/UI Design, Frontend Development, User Testing
            </span>

            <span className={c.subLabel}>TEAM</span>
            <span className={c.subTitle}>
              3 designers, 4 developers, 1 project owner, 1 business analyst
            </span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              In 2020, we encountered a myriad of challenges, notably
              <strong> restrictions on international travel</strong>. These
              circumstances demanded extra support for students in making
              informed decisions about their courses and navigating their
              academic paths. Course Mapper was conceived to{' '}
              <strong>ease the burden</strong> by offering guidance to students
              during these uncertain times. Its purpose is to{' '}
              <strong>assist students</strong> in selecting their units and
              completing their degrees seamlessly, ensuring a smoother academic
              journey.
            </span>
          </div>
        </div>
        <div className={c.projectImg}>
          <img src={mapper} alt="mapper" />
        </div>

        <div className={c.projectContent}>
          <div className={c.numberContainer}>
            <span>Since July 2021, Course Mapper has successfully</span>
            <div className={c.projectHighlight}>
              <div>
                <span className={c.subLabel}>GENERATED</span>
                <span className={c.number}>60,000+</span>
                <span>Personalized course plans</span>
              </div>
              <div>
                <span className={c.subLabel}>HELPED</span>
                <span className={c.number}>25,000+</span>
                <span>Students</span>
              </div>
              <div>
                <span className={c.subLabel}>USED BY</span>
                <span className={c.number}>200</span>
                <span>Course advisers</span>
              </div>
              <div>
                <span className={c.subLabel}>REDUCE HANDLING TIMES</span>
                <span className={c.number}>{'20 -> 5'}</span>
                <span>Minutes</span>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>THE PROBLEM</div>

            <div className={c.subSection}>
              <div className={c.description}>
                Our goal for the project was to transform a paper-based, manual
                and time-consuming course mapping progress to a smooth, seamless
                and easy online experience.
              </div>
              <div>
                <div className={c.subTitle}>For staff - Course advisers</div>
                <div className={c.subTitleSmall}>Information fragmentation</div>
                <div className={c.subDescription}>
                  Course advisers often need to refer to a multitude of
                  information sources during the course mapping process. As a
                  result, a multitude of tabs—comprising web pages and local
                  files—inevitably clutter the workspace.
                </div>
                <div className={c.subTitleSmall}>Lack of standardization</div>
                <div className={c.subDescription}>
                  Course advisers are working with data from different sources
                  and formats.
                </div>
              </div>
              <div>
                <div className={c.subTitle}>For student</div>
                <div className={c.subTitleSmall}>Inconsistent output</div>
                <div className={c.subDescription}>
                  As students receive course advice from multiple advisers
                  during their study, the manual process makes it challenging to
                  refer back to previous suggested course plans easily.
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>MY ROLE</div>
            <div className={c.subSection}>
              <div className={c.description}>
                I had the privilege of leading the design of the course advice
                experience. This involved close collaboration with fellow
                designers, as well as actively contributing to the front-end
                development. Together, we crafted an innovative and user-centric
                course advice system that enhances the academic journey for
                staff and students.
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>USER RESEARCH</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>
                  User Interviews and User Journey Mapping
                </div>
                <div className={c.subDescription}>
                  Our team of designers conducted extensive interviews with
                  end-users, encompassing both staff and students. These
                  interviews aimed to uncover the existing process, pain points,
                  opportunities, and user expectations for the app. Using this
                  valuable insight, we mapped out the current process,
                  translating it into detailed steps and actions.
                </div>
                <div>
                  <div className={c.subTitle}>Enquiries Analysis</div>
                  <div className={c.subDescription}>
                    I conducted comprehensive research analysis on various
                    categories of student enquiries and synthesized the
                    resulting requirements and expectations.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>IDEAS AND ITERATION</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>Brainstorming</div>
                <div className={c.subDescription}>
                  Using the insights from my research and analysis, I
                  facilitated multiple high-level brainstorming sessions to
                  uncover the root flow of the problem.
                </div>
                <div className={c.projectImg}>
                  <div className={c.subTitleSmall}>Before</div>
                  <img src={coreBefore} alt="mapper" className={c.inline} />
                  <div className={c.subTitleSmall}>After</div>

                  <img src={coreAfter} alt="mapper" className={c.inline} />
                </div>
                <div className={c.subDescription}>
                  Additionally, we addressed other pain points through multiple
                  brainstorming sessions, collectively striving to identify the
                  most effective and optimal solutions.
                </div>
                <div className={c.subDescription}>
                  In this example, one of the pain points lies in the existence
                  of hundreds of PDF course progression maps maintained by
                  faculties, each with different formats. As a proof of concept,
                  I manually mapped three courses to showcase the potential
                  value of our solution.
                </div>
                <div className={c.projectImg}>
                  <div className={c.subTitleSmall}>Before</div>
                  <img src={mapBefore} alt="mapper" className={c.inline} />
                  <div className={c.subTitleSmall}>After</div>

                  <img src={mapAfter} alt="mapper" className={c.inline} />
                </div>
                <div className={c.subDescription}>
                  This approach emerged as the most cherished and widely
                  embraced feature among course advisors. Currently, with
                  dedicated resources and assistance, we have successfully
                  digitized thousands of historical PDF course maps.
                </div>
                <div className={c.subDescription}>
                  Now, we aim to initiate a new project to build digital course
                  maps from scratch, further improving user experience and
                  accessibility.
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>THE SMALL THINGS</div>
            <div className={c.subSection}>
              <div>
                <div className={c.subTitle}>Recognising needs and emotions</div>
                <div className={c.subDescription}>
                  Understanding the critical role advisors play in guiding
                  students, we prioritize validation and double-checking
                  mechanisms to instill confidence and ensure accurate
                  recommendations.
                </div>

                <div className={c.subDescription}>
                  This includes displaying essential student information, such
                  as names and IDs, for quick reference and easy access.
                  Moreover, we provide a seamless way for advisors to switch
                  between students they are advising.
                </div>
                <div className={c.subDescription}>
                  Furthermore, we enhance clarity by indicating unit counts for
                  specific majors.
                </div>
                <div className={c.projectImg}>
                  <img src={detailOne} alt="mapper" className={c.inline} />
                </div>
                <div className={c.subTitle}>Enhance information context</div>
                <div className={c.subDescription}>
                  By streamlining processes and presenting data in a meaningful
                  context, we enable advisors to work more efficiently and make
                  well-informed decisions. This approach not only saves time but
                  also elevates the advising experience, ultimately empowering
                  advisors to provide comprehensive and valuable support to
                  students.
                </div>

                <div className={c.projectImg}>
                  <img src={detailTwo} alt="mapper" className={c.inline} />
                </div>

                <div className={c.subTitle}>Communication and rewards</div>
                <div className={c.subDescription}>
                  Reflecting the status of whether students have viewed their
                  plans enhances communication between students and course
                  advisers, fostering a rewarding sense of accomplishment for
                  both parties.
                </div>

                <div className={c.projectImg}>
                  <img src={detailThree} alt="mapper" className={c.inline} />
                </div>
              </div>
            </div>
          </div>
          <div className={c.section}>
            <div className={c.title}>BRING IT ALL TOGETHER</div>
            <div className={c.subSection}>
              <div className="video-container">
                <ReactPlayer
                  url="https://drive.google.com/uc?id=1aVB5vu2ieN7mtR_kJ8SRz_UQRakUzDuI"
                  controls={true}
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
              <div className={c.subDescription}>
                Taking user feedback to heart, we have iteratively refined and
                released several updates since the initial launch of Course
                Mapper. This iterative process ensures that the platform
                consistently evolves to meet the needs and expectations of its
                users, delivering an increasingly seamless and effective
                experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        left={{
          to: '/monash-student-portal',
          name: 'STUDENT PORTAL',
        }}
        right={{ to: '/monash-peerview', name: 'PEERVIEW' }}
      />
    </>
  )
}
export default transition(CourseMapper)
