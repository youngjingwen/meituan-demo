import React from 'react'

const HomeIcon = ({ active }) => (
  <div>
    <svg width="24px" height="26px" viewBox="0 0 24 26">
      <defs></defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="home-icon" transform="translate(0.000000, 1.000000)" stroke={active ? '#333333' : '#9F9F9F'}>
              <polygon id="house" fill={active ? '#FFD161' : '#FFFFFF'} points="12 0 1 9 1 24 23 24 23 9"></polygon>
              <path d="M8,24 L16,24 L16,15 C13.3333333,12.3333333 10.6666667,12.3333333 8,15 C8,17 8,20 8,24 Z" id="door" fill="#FFFFFF"></path>
              <path d="M0.5,24 L23.5,24" id="Path-2" stroke={active ? '#333333' : '#FFFFFF'}></path>
          </g>
      </g>
    </svg>
    <div style={{ 'color': active ? '#333333' : '#9F9F9F'}}>首页</div>
  </div>
)

export default HomeIcon
