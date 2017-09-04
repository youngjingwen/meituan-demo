import React from 'react'
import '../css/footer.css'
import HomeIcon from './HomeIcon'
import UserIcon from './UserIcon'
import OrderIcon from './OrderIcon'
import {
  Link,
  withRouter
} from 'react-router-dom'

const Footer = ({ location }) => (
  <div className="footer">
    <div className="item">
      <Link to="/">
        <HomeIcon active={location.pathname === '/'} />
      </Link>
    </div>
    <div className="item">
      <Link to="/order">
        <OrderIcon active={location.pathname === '/order'} />
      </Link>
    </div>
    <div className="item">
      <Link to="/mine">
        <UserIcon active={location.pathname === '/mine'} />
      </Link>
    </div>
  </div>
)

export default withRouter(Footer)
