import React from 'react'
import '@PortfolioList/index.scss'

export const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? 'portfolio-list active' : 'portfolio-list'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}
