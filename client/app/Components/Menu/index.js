import React from 'react'
import '@Menu/index.scss'

export const Menu = ({ menu, setMenu }) => {
  return (
    <div className={`menu ${menu && 'active'}`}>
      <ul>
        <li onClick={() => setMenu(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
