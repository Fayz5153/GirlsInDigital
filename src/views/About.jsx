import React, { Component } from 'react';

// import Image
import About1 from "../images/about1.png"
import About2 from "../images/about2.png"

class About extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="about" id='about'>
          <p className='title black'>О проекте</p>
          <div className="card">
            <div className="card__item">
              <img src={About1} alt="" />
            </div>
            <div className="card__item">
              <p className='black'>
                Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__item">
              <p className='black'>
                Проект “Программа обучения девушек в сфере И.Т”  предназначен для девушек в возрасте 16-35, которые имеет базовые знание в сфере айти.
              </p>
            </div>
            <div className="card__item">
              <img src={About2} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default About;