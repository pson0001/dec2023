import c from './face.module.scss'
const Face = () => {
  return (
    <div className={c.face}>
      <div className={c.eyeContainer}>
        <div className={[c.eye, c.one].join(' ')} id="eye"></div>

        <div className={[c.eye, c.two].join(' ')} id="eye"></div>
      </div>

      <div className={c.mouth} id="mouth"></div>
    </div>
  )
}
export default Face
