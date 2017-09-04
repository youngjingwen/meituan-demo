import React from 'react'

const UserIcon = ({ active }) => (
  <div>
    <svg width="24px" height="26px" viewBox="0 0 24 26" >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="order-icon" stroke={active ? '#333333' : '#9F9F9F'}>
                <polygon id="outline" fill={active ? '#FFD161' : '#FFFFFF'} points="1 4 23 4 23 25 1 25"></polygon>
                <path d="M6,1 L18,1" id="line"></path>
                <path d="M6,8 L18,8" id="line"></path>
                <path d="M6,13 L18,13" id="line"></path>
                <path d="M6,18 L13.5166482,18" id="line"></path>
                <path d="M0.5,25 L23.5,25" id="bottom-line" stroke={active ? '#333333' : '#FFFFFF'}></path>
            </g>
        </g>
    </svg>
    <div style={{ 'color': active ? '#333333' : '#9F9F9F'}}>订单</div>
  </div>
)

export default UserIcon
