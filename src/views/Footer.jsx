import React, { Component } from 'react';

// import Images
import Logo from "../icons/logo.svg"
import Instagram from "../icons/instagram.svg"
import Telegram from "../icons/telegram.svg"
import Youtube from "../icons/youtube.svg"
import Facebook from "../icons/facebook.svg"

class Footer extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <footer className='footer'>
          <div className="footer__left">
            <img src={Logo} alt="" />
            <p>GIRLS IN DIGITAL</p>
          </div>
          <div className="footer__center">
            <a className='link' href="#about">О Проекте</a>
            <a className='link' href="#direction">Направления</a>
            <a className='link' href="#results">Результаты</a>
            <a className='link' href="#contacts">Контакты</a>
          </div>
          <div className="footer__right">
            <div>
              <a href="#uz">Уз</a>
              <a className='lang_active' href="#ru">Ру</a>
            </div>
            <div>
              <a href="#instagram"><img src={Instagram} alt="" /></a>
              <a href="#telegram"><img src={Telegram} alt="" /></a>
              <a href="#youtube"><img src={Youtube} alt="" /></a>
              <a href="#facebook"><img src={Facebook} alt="" /></a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
 
export default Footer;