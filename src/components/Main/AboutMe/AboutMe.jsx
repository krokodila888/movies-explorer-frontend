import React from 'react';
import photo from '../../../images/7920b48d-4b86-4ddf-9b36-d50f3e7a4235-min.jpg';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className="aboutMe__content" id="AboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className='aboutMe__text-block'>
        <div className='aboutMe__column'>
          <div>
            <p className="aboutMe__name-text">Евгения</p>
            <p className="aboutMe__status-text">Фронтенд-разработчик, 34 года</p>
            <p className="aboutMe__text">Родилась и живу в Москве, получила две вышки: юридическое и менеджмент по профилю информационной безопасности. Замужем, есть дочь. Консультировала людей по настольным играм, работала следователем (ошибки юности), кондитер 4 разряда; последние годы работаю корректором-документоведом на хорошей зарплате. Переучиваюсь на веб-разработчика, чтобы привязать зарплату к другому языку и перекрасить волосы в синий навсегда.</p>
          </div>
          <a className="aboutMe__link" href="https://github.com/krokodila888" target="_blank">GitHub</a>
        </div>
        <div className='aboutMe__column'>
        <img src={photo} alt="Фото студентки, ужасно симпатичное" className="aboutMe__photo" />
        </div>
      </div>
    </section>
  );
}  

export default AboutMe; 