import React from 'react'
import CV from '../../assets/Curriculo Nami.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'> Fale Comigo</a>
    </div>
  )
}

export default CTA