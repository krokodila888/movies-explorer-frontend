import React from 'react';
import './AboutProject.css';

function AboutProject() {

  return (
    <div className="aboutProject__content" id="AboutProject">
      <h2 className="aboutProject__main-title">О Проекте</h2>
      <div className="aboutProject__text-block">
        <div className="aboutProject__column">
          <p className="aboutProject__title">Дипломный проект включал 5 этапов</p>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__column">
          <p className="aboutProject__title">На выполнение диплома ушло 5 недель</p>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__grid-line">
        <p className="aboutProject__text aboutProject__grid-text aboutProject__blue-line">1 неделя</p>
        <p className="aboutProject__text aboutProject__grid-text aboutProject__grey-line">4 недели</p>
        <p className="aboutProject__text aboutProject__grid-text">Back-end</p>
        <p className="aboutProject__text aboutProject__grid-text">Front-end</p>
      </div>
    </div>
  );
}  

export default AboutProject; 