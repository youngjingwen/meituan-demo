import React from 'react'

const UserIcon = ({ active }) => (
  <div>
    <svg width="24px" height="25px" viewBox="0 0 24 25" >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="user-icon" transform="translate(0.000000, 1.000000)" stroke={active ? '#333333' : '#9F9F9F'}>
              <path d="M1,23 L21,23 C22.3333333,19.7375887 22.6666667,16.1489362 22,12.2340426 C23,7.82978723 23,8.31914894 22,5.87234043 C21.3333333,4.24113475 21.1666667,2.28368794 21.5,0 L18,2.44680851 L14,2.93617021 L10.5,0 C10.5,1.95744681 10.5,4.07801418 10.5,6.36170213 C9.5,9.29787234 10.5,9.29787234 9.5,12.2340426 C5.16666667,12.5602837 2.33333333,16.1489362 1,23 Z" id="Path-3" fill={active ? '#FFD161' : '#FFFFFF'}></path>
              <path d="M18,7 C18.6666667,5.66666667 19.3333333,5.66666667 20,7" id="eye"></path>
              <path d="M13,7 C13.6666667,5.66666667 14.3333333,5.66666667 15,7" id="eye"></path>
              <path d="M14,10 C14.6666667,12 15.5,12 16.5,10 C17.1666667,12 18.1666667,12 19.5,10" id="Path-4"></path>
              <path d="M0.494050189,23 L21.5060967,23" id="bottom-line" stroke={active ? '#333333' : '#FFFFFF'}></path>
          </g>
      </g>
    </svg>
    <div style={{ 'color': active ? '#333333' : '#9F9F9F'}}>我的</div>
  </div>
)

export default UserIcon
