import Background from '../../home/projects/Background'
import c from './contact.module.scss'
// import { container, item } from '../../home/utils/animation'
// import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className={c.pageContainer}>
      <div className={[c.hole, c.one].join(' ')} />
      <div className={[c.hole, c.two].join(' ')} />{' '}
      <div className={[c.hole, c.three].join(' ')} />
      <div className={c.body}>
        <div className={c.title}>
          <span>
            If you are interested to chat, feel free to reach out on{' '}
            <a
              href="https://www.linkedin.com/in/ping-song-pson0001/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <span>.</span>
          </span>
        </div>
        <div className={c.title}>
          <span>Thank you for stopping by!</span>
          <span className={c.note}>
            © 2023 Design and developed by Ping Song
          </span>
        </div>
      </div>
      <div></div>
      <Background />
    </div>
  )
}

export default Contact
