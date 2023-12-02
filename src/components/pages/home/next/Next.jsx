import { Link } from 'react-router-dom'
import Background from '../projects/Background'
import c from './next.module.scss'

const Next = () => {
  return (
    <div className={c.projectContainer}>
      <div className={c.circlesContainer}>
        {/* <div className={[c.circle, c.one].join(' ')}></div> */}
        <div className={[c.circle, c.two].join(' ')}></div>
        <div className={[c.circle, c.three].join(' ')}></div>
        <div className={[c.circle, c.four].join(' ')}></div>
        <Link className={c.nextBall} to={'/about'}>
          <span className={c.slide}>About</span>
          <span className={c.icon}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#101010"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </span>
        </Link>
      </div>
      <Background />
    </div>
  )
}
export default Next
