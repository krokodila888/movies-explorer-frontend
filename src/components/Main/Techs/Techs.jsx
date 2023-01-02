import React from 'react';
import './Techs.css';

function Techs() {

  return (
    <section className="techs__content" id="Techs">
      <div className="techs__content-inside">
        <h2 className="techs__title">Технологии</h2>
          <div className='techs__column'>
            <p className="techs__main-title">7 технологий</p>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
       <div className='techs__grid-line'>
          <p className="techs__text techs__text-background">HTML</p>
          <p className="techs__text techs__text-background">CSS</p>
          <p className="techs__text techs__text-background">JS</p>
         <p className="techs__text techs__text-background">React</p>
          <p className="techs__text techs__text-background">Git</p>
          <p className="techs__text techs__text-background">Express.js</p>
          <p className="techs__text techs__text-background">MongoDB</p>
        </div>
      </div>
    </section>
  );
}  

export default Techs; 