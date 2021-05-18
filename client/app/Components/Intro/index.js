import React from 'react'
import '@Intro/index.scss'
import { Coding } from '@Intro/Coding'

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <Coding />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I&apos;m</h2>
          <h1>Jessie Tarrosa</h1>
          <h3>Wev Developer</h3>
          <span>
            Pursuing aesthetics in designing, readable and clean coding.
          </span>
          <a href="https://github.com/oreoseenoevil">Github profile</a>
        </div>
      </div>
    </div>
  )
}
