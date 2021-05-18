import React from 'react'
import '@TopBar/index.scss'
import { Person, Mail } from '@material-ui/icons'

export const TopBar = ({ menu, setMenu }) => {
  return (
    <div className={`topbar ${menu && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">{'{ creator }'}</a>
          <div className="group">
            <div className="item-container">
              <Person />
              <span>+63 995 853 1533</span>
            </div>
            <div className="item-container">
              <Mail />
              <span>creators.nuke@gmail.com</span>
            </div>
          </div>
        </div>
        <div
          className="right"
          onClick={() => setMenu(!menu)}
        >
          <div className="burger">
            <span className="bar1"></span>
            <span className="bar2"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
