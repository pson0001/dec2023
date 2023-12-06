import { Link } from 'react-router-dom'
import c from './footer.module.scss'
const Footer = ({ left, right }) => {
  return (
    <div className={[c.navigateButton, left ? null : c.right].join(' ')}>
      {left && (
        <Link to={left.to} className={[c.buttonItem, c.previous].join(' ')}>
          <span className={c.arrow}></span>
          <span className={c.arrowText}>{left.name}</span>
          <span className={c.arrowLine}></span>
        </Link>
      )}
      {right && (
        <Link to={right.to} className={[c.buttonItem, c.next].join(' ')}>
          <span className={c.arrowText}>{right.name}</span>
          <span className={c.arrowLine}></span>
          <span className={c.arrow}></span>
        </Link>
      )}
    </div>
  )
}
export default Footer
