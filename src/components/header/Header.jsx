import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá eu sou</h5>
        <h1>Mayara Nami Tamataya</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
            <img src={ME} alt="me" className='meimg' />
        </div>
        <a href="#contact" className='scroll__down'>Vá Para Baixo</a>
      </div>
    </header>
  )
}

export default Header