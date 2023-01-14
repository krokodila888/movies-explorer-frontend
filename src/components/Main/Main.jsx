import React from "react";
import Promo from './Promo/Promo.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Header from '../Header/Header.jsx';
import HeaderLogin from '../Header/HeaderLogin.jsx';
import Footer from '../Footer/Footer.jsx';
import './Main.css';

function Main(props) {

  const {loggedIn} = props;

  return (
    <main className="main__content">
      <section className="profile">
        {!loggedIn &&
          <Header/>
        }
        {loggedIn &&
          <HeaderLogin/>
        }
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </section>
    </main>
  );
}  

export default Main;
