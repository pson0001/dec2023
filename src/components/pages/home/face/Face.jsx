/* eslint-disable react/prop-types */
import c from './face.module.scss'
import Background from '../projects/Background'
const Face = ({ faceRef }) => {
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

      <Background />
    </div>
  )
}
export default Face
