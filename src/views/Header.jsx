import React, { Component } from 'react';

// import Images
import Header_bg from "../images/header_bg.png"
import Girl from "../images/girl.png"
import Naqsh from "../images/naqsh.svg"

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className='header__bg'>
          <img src={Header_bg} alt="" />
        </div>
        <div className="header">
          <div className="header__left">
            <h1>“Girls in digital”</h1>
            <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров</p>
            <a href="#header">Подробнее</a>
            <img className='naqsh' src={Naqsh} alt="" />
          </div>
          <div className="header__right">
            <img src={Girl} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Header;