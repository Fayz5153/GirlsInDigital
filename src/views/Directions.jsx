import React, { Component } from 'react';

// import Images
import D1 from "../images/d1.svg"
import D2 from "../images/d2.svg"
import D3 from "../images/d3.svg"
import D4 from "../images/d4.svg"
import D5 from "../images/d5.svg"
import D6 from "../images/d6.svg"
import Di1 from "../images/di1.png"
import Di2 from "../images/di2.png"

class Directions extends Component {
  state = { 
    data: [
      { id: 1, title: "SMM и Таргетинг, копирайтинг", img: D1 },
      { id: 2, title: "3D дизайн.", img: D2 },
      { id: 3, title: "Графический дизайн", img: D3 },
      { id: 4, title: "Логистика", img: D4 },
      { id: 5, title: "Программиро-вание", img: D5 },
      { id: 6, title: "Айти менеджмент", img: D6 },
    ]
   } 
  render() { 
    return (
      <React.Fragment>
        <div id='direction'></div>
        <div className="directions">
          <p className='title white'>Направлении</p>
          <p className='description white'>Проект будет проводится по направлениям</p>
          <div className='direction__card'>
            {this.state.data.map( (data) => {
              return(
                <div className="direction__item" key={data.id}>
                  <p>{data.title}</p>
                  <img src={data.img} alt="" />
                </div>
              )
            })}
          </div>
          <a href="#registratsiya" className='reg_btn'>Записаться</a>
        </div>
        <div className="about">
          <div className="card">
            <div className="card__item">
              <img src={Di1} alt="" />
            </div>
            <div className="card__item">
              <p className='black'>
                Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__item">
              <p className='black'>
                Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. 
              </p>
            </div>
            <div className="card__item">
              <img src={Di2} alt="" />
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Directions;