import React from 'react';
import './about.css';
import { Fade } from "react-awesome-reveal";

const About = () => {
  
  return (
    <div className="about">
      <div className='about_text'>
        <Fade direction="up" cascade>
          <h2 className='about_title myFont'>About Me</h2>
          <p className='about_description'>Je suis un développeur front-end passionné avec une expérience dans la création de sites web et d'applications dynamiques en utilisant HTML, CSS, Javascript et React.<br /> Diplômé d'OpenClassrooms en tant que développeur d'applications front-end Javascript React, j'ai acquis les compétences nécessaires pour travailler en mode Agile, communiquer avec le back-end d'une application, mettre en œuvre des tests unitaires et d'intégration, et refactoriser le code pour le rendre plus moderne et optimisé.</p>
        </Fade>
      </div>
      <div className='about_img'></div>
    </div>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
