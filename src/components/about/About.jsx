import React from 'react'
import './About.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Me conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre Imagem" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Cargo Atual</h5>
              <small>Estudante</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Curso</h5>
              <small>Licenciatura em História</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>Em Andamento</small>
            </article>
            </div>
          <p>
          Eu sou uma universitária cursando Licenciatura em História, mas possuo diversos conhecimentos e interesses. Tenho um Técnico em informática e possuo conhecimentos em programação nas linguagens: C#, Javascript, HTML, CSS, PHP, Bootsrap, Banco de dados (dependendo do banco de dados como ex: MySQL, MongoDB). Apesar de parecerem áreas distintas, a minha graduação em Licenciatura me da além do conhecimento e facilidade de leitura e escrita de grandes relatórios ou códigos, enquanto a parte de licenciatura me ajudou a aprender a me comunicar com todos os tipos de pessoas, independente do assunto e trabalhar em equipe também.

Possuo alguns cursos extras também, em fotografia e WebDesign e Pacote Office, que me deram uma porta para dominar o Pacote Adobe também. Todas essas características distintas me tornam uma profissional melhor e espero ter a oportunidade de poder participar e obter novos conhecimentos sempre.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About