import React, { useState } from 'react'
import '@App/index.scss'
import { TopBar } from '@TopBar'
import { Menu } from '@Menu'
import { Intro } from '@Intro'
import { Portfolio } from '@Portfolio'
import { Works } from '@Works'
import { Testimonials } from '@Testimonials'
import { Contact } from '@Contact'

export const App = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className="app">
      <TopBar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}
