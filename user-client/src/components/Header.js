import React from 'react'
import ReturnIcon from './ReturnIcon'
import MoreIcon from './MoreIcon'
import '../css/header.css'
import {
  Link
} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <Link className="return" to="/" >
      <ReturnIcon />
    </Link>
    <Link to="" className="more">
      <MoreIcon />
    </Link>
  </div>
)

export default Header
