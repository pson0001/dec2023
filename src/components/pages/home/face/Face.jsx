/* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from 'react'
import c from './face.module.scss'
const Face = () => {
  // const [positionX, setPositionX] = useState(null)
  // const [positionY, setPositionY] = useState(null)
  // const face = useRef()
  // console.log(
  //   face.current?.getBoundingClientRect().left,
  //   face.current?.getBoundingClientRect().left + 40 - 500,
  //   positionX
  // )

  // useEffect(() => {
  //   if (face.current) {
  //     setPositionX(face.current.getBoundingClientRect().left + 40 - 500)
  //     setPositionY(face.current.getBoundingClientRect().top + 40 - 500)
  //   }
  // }, [face])
  return (
    <div className={c.decorContainer}>
      <div className={c.circlesContainer}>
        <div className={[c.circle, c.one].join(' ')}>
          <div className={[c.circle, c.two].join(' ')}>
            <div className={[c.circle, c.three].join(' ')}>
              <div className={[c.circle, c.four].join(' ')}>
                <div className={[c.circle, c.five].join(' ')}>
                  <div className={c.face}>
                    <div className={c.eyeContainer}>
                      <div className={[c.eye, c.one].join(' ')} id="eye"></div>

                      <div className={[c.eye, c.two].join(' ')} id="eye"></div>
                    </div>

                    <div className={c.mouth} id="mouth"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={c.bigCirclesContainer}>
        <div className={[c.circle, c.one].join(' ')}></div>
        <div className={[c.circle, c.two].join(' ')}></div>
      </div>
    </div>
  )
}
export default Face
