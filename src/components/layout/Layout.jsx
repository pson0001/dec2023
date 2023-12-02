import { Outlet, Link } from 'react-router-dom'
import c from './layout.module.scss'
import Logo from '../assets/logo.svg'
const Layout = () => {
  return (
    <div className={c.pageLayout}>
      <nav>
        <ul className={c.navbar}>
          <li>
            <Link className={c.home} to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
