/* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from 'react'
import c from './face.module.scss'
import star from '../../../assets/star.svg'
import { randomIntFromRange } from '../utils/utils'
import { useMemo } from 'react'
const Face = ({ faceRef }) => {
  const starArray = useMemo(() => {
    return Array.from({ length: 20 }, (v, i) => (
      <div
        className={c.star}
        key={i}
        style={{
          top: `${randomIntFromRange(-800, 800)}px`,
          left: `${randomIntFromRange(-800, 800)}px`,
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
          top: `${randomIntFromRange(-800, 800)}px`,
          left: `${randomIntFromRange(-800, 800)}px`,
        }}
      ></div>
    ))
  }, [])

  return (
    <div className={c.decorContainer}>
      <div className={c.circlesContainer}>
        <div className={[c.circle, c.one].join(' ')}></div>
        <div className={[c.circle, c.two].join(' ')}></div>
        <div className={[c.circle, c.three].join(' ')}></div>
        <div className={[c.circle, c.four].join(' ')}></div>
        <div className={[c.circle, c.five].join(' ')}></div>
        <div className={c.face} ref={faceRef}>
          <div className={c.eyeContainer}>
            <div className={[c.eye, c.one].join(' ')} id="eye"></div>

            <div className={[c.eye, c.two].join(' ')} id="eye"></div>
          </div>
          <div className={c.mouth} id="mouth"></div>
        </div>
      </div>
      <div className={c.bigCirclesContainer}>
        <div className={[c.circle, c.one].join(' ')}></div>
        <div className={[c.circle, c.two].join(' ')}></div>
      </div>
      <div className={c.starsContainer}>{starArray}</div>
      <div className={c.starsContainer}>{circleArray}</div>
    </div>
  )
}
export default Face
