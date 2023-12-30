import { useEffect, useState } from 'react'

import transition from '../../layout/transition'
import c from './project.module.scss'
import landing from '../../assets/projects/landing-browser.png'
import Icon from '../../assets/Icon'
import differences from '../../assets/projects/differences.png'
import current from '../../assets/projects/portal-current.png'
import future from '../../assets/projects/portal-future.png'
import Footer from '../footer/Footer'
import Background from '../home/projects/Background'
import Userone from '../../assets/projects/userone.svg'
import Usertwo from '../../assets/projects/usertwo.svg'
import Userthree from '../../assets/projects/userthree.svg'
import Userfour from '../../assets/projects/userfour.svg'
import different from '../../assets/projects/different.png'
import ReactPlayer from 'react-player'

const StudentPortal = () => {
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

  const [password, setPassword] = useState()
  const [showMore, setShowMore] = useState(false)
  const [error, setError] = useState(false)
  const checkPassword = (e) => {
    e.preventDefault()

    if (!password) {
      setShowMore(false)
      setError(true)
    }
    if (password?.replace(/\s+/g, '') === 'pingisthebest') {
      setShowMore(true)
      setError(false)
    } else {
      setShowMore(false)
      setError(true)
    }
  }
  return (
    <>
      <Background height={height} />
      <div className={c.projectContainer}>
        <div className={c.project}>
          <div className={c.projectTitle}>
            <span className={c.subLabel}>PROJECT NAME</span>
            <span className={c.title}>STUDENT PORTAL</span>

            <span className={c.subLabel}>RESPONSIBILITY</span>
            <span className={c.subTitle}>
              User research, UX/UI Design, Frontend Development, User Testing
            </span>

            <span className={c.subLabel}>TEAM</span>
            <span className={c.subTitle}>
              5 designers, 6 developers, 1 project owner, 1 business analyst
            </span>
          </div>
          <div className={c.projectIntro}>
            <span className={c.subLabel}>OVERVIEW</span>
            <span className={c.subTitle}>
              Within the framework of Monash University's "digital
              transformation", our team has prioritized the enhancement of the
              student portal. Our mission revolves around crafting a{' '}
              <strong>cutting-edge digital experience</strong> that not only
              meets but exceeds student expectations. We are dedicated to
              delivering interactions that are seamless and intuitive, aiming to
              create a world-class portal. Through innovation and pushing
              boundaries, our goal is to establish a{' '}
              <strong>new standard of excellence</strong>, ensuring that
              students' journeys through the portal are nothing short of
              exceptional.
            </span>
          </div>
          <div className={c.projectImg}>
            <img src={landing} alt="landing" />
          </div>
        </div>

        <div className={c.projectContent}>
          <div className={c.section}>
            <div className={c.title}>BACKGROUND</div>

            <div className={c.description}>
              The university has made the decision to update the current
              23-year-old student management system as part of a digital
              transformation initiative. This presents a unique opportunity to
              reimagine and enhance the student experience.
            </div>
          </div>

          <div className={c.section}>
            <div className={c.title}>UNDERSTAND</div>

            <div className={c.subSection}>
              <div className={c.subTitle}>Every student is different…</div>
              <div className={c.projectImg}>
                <img src={differences} alt="differences" className={c.inline} />
              </div>
              <div className={c.description}>
                These individual differences influence the feelings, thoughts
                and behaviours of different students, and in the context of
                university, this means that different students are driven and
                motivated by different things
              </div>
            </div>
          </div>

          <div className={c.section}>
            <div className={c.title}>THE BIG GOAL</div>

            <div className={c.subSection}>
              <div className={c.subTitle}>High level student life cycle</div>
              <div className={c.arrowContainer}>
                <span>Prospective students</span>
                <Icon.ArrowRightSmall />
                <span>Enrolling students</span> <Icon.ArrowRightSmall />
                <span>Current students</span> <Icon.ArrowRightSmall />
                <span>Graduates</span>
              </div>

              <div>
                Mapping out the university experience into four stages reveals a
                comprehensive perspective. Understanding this high-level cycle
                is crucial in addressing overarching issues. Ultimately,
                students seek a sense of success during their university
                journey. A continuous and seamless digital experience plays a
                pivotal role in enabling this fulfillment.
              </div>
              <div className={c.projectImg}>
                <div className={c.subTitle}>Current</div>
                <img src={current} alt="current" className={c.slide} />

                <div className={c.subTitle}>Future</div>
                <img src={future} alt="future" className={c.slide} />
              </div>
            </div>
          </div>

          {showMore ? (
            <>
              <div className={c.section}>
                <div className={c.title}>DEFINE THE RIGHT PROBLEMS</div>

                <div className={c.subSection}>
                  <div className={c.subTitle}>Main problems</div>
                  <div className={c.problemsContainer}>
                    <div className={c.problem}>
                      <Icon.Fragmentation />
                      <div className={c.subTitleSmall}>Fragmentation</div>

                      <div>
                        Jumping from different platforms to do simple tasks.
                      </div>
                    </div>
                    <div className={c.problem}>
                      <Icon.Personalisation />

                      <div className={c.subTitleSmall}>
                        Lack of personalisation
                      </div>

                      <div>
                        one-size-fits-all approach results in a suboptimal user
                        experience.
                      </div>
                    </div>
                    <div className={c.problem}>
                      <Icon.Inefficiencies />
                      <div className={c.subTitleSmall}>Inefficiencies</div>

                      <div>
                        Lack of efficiencies and intuitive navigation, leading
                        to a disjointed user experience. Struggle to find
                        essential information, resulting in decreased engagement
                        and increased support queries.
                      </div>
                    </div>
                    <div className={c.problem}>
                      <Icon.Time />
                      <div className={c.subTitleSmall}>
                        Hard to access on time information
                      </div>

                      <div>
                        Face challenges in accessing real-time academic updates,
                        course materials, and university announcements.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={c.subSection}>
                  <div className={c.subTitle}>User personas</div>

                  <div className={c.personasContainer}>
                    <div className={c.persona}>
                      <img src={Userone} alt="current" />
                      <div>
                        <div className={c.subTitleSmall}>
                          New & First year students
                        </div>
                        <div className={c.subDescription}>
                          “Finding my feet and fast tracking getting my head
                          around the who, what and where of uni life is my
                          focus”
                        </div>
                        <div className={c.subDescription}>
                          - 1st year, Psychology
                        </div>
                      </div>
                    </div>
                    <div className={c.persona}>
                      <img src={Usertwo} alt="current" />
                      <div>
                        <div className={c.subTitleSmall}>
                          International & Exchange students
                        </div>
                        <div className={c.subDescription}>
                          “Volunteering with the MSA gives valuable experience,
                          it’s free and gives me a way to explore Australia and
                          make Friends”
                        </div>
                        <div className={c.subDescription}>
                          - 3rd year, Food science
                        </div>
                      </div>
                    </div>
                    <div className={c.persona}>
                      <img src={Userthree} alt="current" />

                      <div>
                        <div className={c.subTitleSmall}>
                          Intermediate year students
                        </div>
                        <div className={c.subDescription}>
                          “I’ll think about next year. This is my year to have
                          fun and do what i want”
                        </div>
                        <div className={c.subDescription}>
                          - 2nd year, Nursing
                        </div>
                      </div>
                    </div>
                    <div className={c.persona}>
                      <img src={Userfour} alt="current" />

                      <div>
                        <div className={c.subTitleSmall}>
                          Final year(s) students
                        </div>
                        <div className={c.subDescription}>
                          “My focus this year is professional development, I’ve
                          made my friends so i don’t need to try as much”
                        </div>
                        <div className={c.subDescription}>
                          - 5th year, Science
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={c.section}>
                <div className={c.title}>DESIGNING THINGS RIGHT</div>

                <div className={c.developContainer}>
                  <div className={c.designContainer}>
                    <div className={c.point}>1</div>
                    <div className={c.subTitleSmall}>
                      Make it feel likes it’s mine
                    </div>
                    <div>Customise how I like</div>
                    <div>Personalise</div>
                  </div>
                  <div className={c.designContainer}>
                    <div className={c.point}>2</div>
                    <div className={c.subTitleSmall}>
                      As few clicks as possible
                    </div>
                    <div>Quick, easy access</div>
                    <div>Supercharged search</div>
                  </div>
                  <div className={c.designContainer}>
                    <div className={c.point}>3</div>
                    <div className={c.subTitleSmall}>Make it a destination</div>
                    <div>An enjoyable experience</div>
                    <div>Not just study</div>
                  </div>
                </div>

                <div className={c.chartContainer}>
                  <div className={c.subTitleSmall}>
                    Every student has different essentials
                  </div>
                  <div className={c.projectImg}>
                    <img
                      src={different}
                      alt="Every student has different essentials"
                    />
                  </div>
                </div>
              </div>

              <div className={c.section}>
                <div className={c.title}>BRING IT ALL TOGETHER</div>
                <div className="video-container">
                  <ReactPlayer
                    url="https://drive.google.com/uc?id=1qsKUav5Uzqb_I-u0LTGW4YdLraXRDPsL"
                    controls={true}
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </div>
                {/* 
          <div className={c.section}>
            <div className={c.title}>Coming soon...</div>

            <div className={c.subSection}>
              <div className={c.description}>
                For the past year, I've been leading the design efforts for the
                new student portal project.
              </div>
              <div className={c.description}>
                We have initiated the recruitment of students for a pilot
                testing program. The pilot program successfully onboarded{' '}
                <strong>4000</strong> students who actively participated in
                discovering bugs and providing valuable feedback. Their
                engagement has been instrumental in enhancing the portal's user
                experience and shaping its successful implementation.
              </div>
              <div className={c.description}>
                This project has truly been a labor of love, with an immense
                amount of effort poured into its success. The overwhelmingly
                positive feedback, constituting 92.3% approval from students,
                stands as a testament to our dedication and hard work. We are
                eagerly anticipating the portal's launch in early 2024, poised
                to provide students with an outstanding digital experience that
                reflects our commitment to excellence.
              </div>

              <div className={c.description}>
                After the launch, I'll be updating this project with further
                developments. In the meantime, feel free to reach out if you're
                interested in knowing more. You can connect with me via{' '}
                <a
                  href="https://www.linkedin.com/in/ping-song-pson0001/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Linkedin <Icon.External />
                </a>
                .
              </div>
            </div>
          </div> */}

                <div className={c.subSection}>
                  <div className={c.description}>
                    For the past year, I've been leading the design efforts for
                    the new student portal project.
                  </div>
                  <div className={c.description}>
                    We have initiated the recruitment of students for a pilot
                    testing program. The pilot program successfully onboarded{' '}
                    <strong>4000</strong> students who actively participated in
                    discovering bugs and providing valuable feedback. Their
                    engagement has been instrumental in enhancing the portal's
                    user experience and shaping its successful implementation.
                  </div>
                  <div className={c.description}>
                    This project has truly been a labor of love, with an immense
                    amount of effort poured into its success. The overwhelmingly
                    positive feedback, constituting 92.3% approval from
                    students, stands as a testament to our dedication and hard
                    work. We are eagerly anticipating the portal's launch in
                    early 2024, poised to provide students with an outstanding
                    digital experience that reflects our commitment to
                    excellence.
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={c.section}>
              <div className={c.passwordContainer}>
                <div className={c.passwordText}>Please enter the password,</div>
                <div className={c.passwordText}>
                  or message me via{' '}
                  <a
                    href="https://www.linkedin.com/in/ping-song-pson0001/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    Linkedin <Icon.External />
                  </a>{' '}
                </div>
                <form>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={checkPassword}>Enter</button>
                </form>
                {error && (
                  <div className={c.errorMessage}>Wrong password :(</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer
        left={{
          to: '/',
          name: 'Home',
        }}
        right={{ to: '/monash-course-mapper', name: 'COURSE MAPPER' }}
      />
    </>
  )
}

export default transition(StudentPortal)
