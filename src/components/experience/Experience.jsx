import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Que conhecimentos eu tenho</h5>
      <h2>Conhecimentos</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Conhecimentos Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Avançado</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Avançado</small>
            </article><article className="experience__details">
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediário</small>
            </article><article className="experience__details">
              <BsPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Básico</small>
            </article><article className="experience__details">
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Intermediario</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Conhecimentos Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>NodeJs</h4>
              <small className='text-light'>Intermediário</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediário</small>
            </article><article className="experience__details">
              <BsPatchCheckFill/>
              <h4>MongoDB</h4>
              <small className='text-light'>Básico</small>
            </article><article className="experience__details">
              <BsPatchCheckFill/>
              <h4>C#</h4>
              <small className='text-light'>Básico</small>
            </article>
            </div>
              </div>
              <div className="experience__languages">
              <h3>Línguas</h3>
              <div className="experience__content">
              <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>Português</h4>
              <small className='text-light'>Fluente/Nativo</small>
            </article>
              <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>Inglês</h4>
              <small className='text-light'>Avançado</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>Espanhol</h4>
              <small className='text-light'>Intermediário</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience