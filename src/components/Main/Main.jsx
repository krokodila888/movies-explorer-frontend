import React from "react";
import Promo from './Promo/Promo.jsx';
import NavTab from './NavTab/NavTab.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function Main() {

  return (
    <main className="content">
      <section className="profile">
        <Header/>
        <Promo/>
        <NavTab/>
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