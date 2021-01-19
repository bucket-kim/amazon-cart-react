import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="/img/amazon-logo.png" alt=""/>
      <div className="header-input">
        <input type="text"/>
      </div>
      <div className="header-name">
          <span>Hello, Brian</span>
          <h4>Account</h4>
      </div>
    </div>
  )
}

export default Header
