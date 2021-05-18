import React, { useState } from 'react'
import '@Works/index.scss'
import { FaMobileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: 0,
      icon: FaMobileAlt,
      headline: 'Calculator App',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/calculator.png',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis rem labore facere unde mollitia.',
      link: 'https://creatorsnuke.github.io/react-calculator/'
    },
    {
      id: 1,
      icon: FaMobileAlt,
      headline: 'Tic Tac Toe Game',
      button: 'View',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/tictactoe.png',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis rem labore facere unde mollitia.',
      link: 'https://oreoseenoevil.github.io/react-tictactoe/'
    },
    {
      id: 2,
      icon: FaMobileAlt,
      headline: 'Todo App',
      button: 'View',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/todoslist.png',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis rem labore facere unde mollitia.',
      link: 'https://oreoseenoevil.github.io/react-todo/'
    },
    {
      id: 3,
      icon: FaMobileAlt,
      headline: 'Roll The Dice Game',
      button: 'View',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/rollthedice.png',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis rem labore facere unde mollitia.',
      link: 'https://oreoseenoevil.github.io/roll-the-dice/'
    },
    {
      id: 4,
      icon: FaMobileAlt,
      headline: 'Random Pallete Colors',
      button: 'View',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/palettecolors.png',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis rem labore facere unde mollitia.',
      link: 'https://oreoseenoevil.github.io/random-ui-colors/'
    },
    {
      id: 5,
      icon: FaMobileAlt,
      headline: 'Analog Clock',
      button: 'View',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/analog-clock.png',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis rem labore facere unde mollitia.',
      link: 'https://oreoseenoevil.github.io/analog-clock/'
    },
  ]
  
  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(d => (
          <div className="container-works" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="image-container">
                    <d.icon />
                  </div>
                  <h2>{d.headline}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.src} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <FaChevronLeft
        className="arrow left"
        onClick={() => handleClick('left')}
      />
      <FaChevronRight
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  )
}
