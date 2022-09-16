import React from 'react';
import AboutHeader from '../../components/About-header';

import CallToAction from '../../components/Call-to-action';

import Navbar from '../../components/Navbar';

import LightTheme from '../../layouts/Light';
import appData from '../../data/app.json';
import Services2 from '../../components/Services2';
import ServiceHeader from '../../components/Service-header/index';

const AboutDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
        logo.setAttribute('src', appData.darkLogo);
      } else {
        navbar.classList.remove('nav-scroll');
        logo.setAttribute('src', appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ServiceHeader />
      <div className='main-content'>
        <Services2 />
      </div>
      <CallToAction theme='light' subBG />
      {/* <Footer /> */}
    </LightTheme>
  );
};

export default AboutDark;
