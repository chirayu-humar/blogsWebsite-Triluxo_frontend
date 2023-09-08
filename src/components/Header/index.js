import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = (props) => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <div className="logo-and-title-container">
        <img
          alt="wave"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="title">Wave</h1>
      </div>
      <ul className="nav-items-list">
        <li className="link-item">
          <Link className="route-link" to="/">
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/about">
            About
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
        <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)