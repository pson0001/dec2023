import star from '../../../assets/star.svg'
import { useMemo } from 'react'
import { randomIntFromRange } from '../utils/utils'
import c from './projects.module.scss'

// eslint-disable-next-line react/prop-types
const Background = () => {
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
    <>
      <div className={c.starsContainer}>{starArray}</div>
      <div className={c.starsContainer}>{circleArray}</div>
    </>
  )
}
export default Background
