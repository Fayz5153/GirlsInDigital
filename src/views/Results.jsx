import React, { Component } from 'react';

// import Images
import R1 from "../images/r1.svg"
import R2 from "../images/r2.svg"
import R3 from "../images/r3.svg"
import R4 from "../images/r4.svg"
import R5 from "../images/r5.svg"
import Naqsh from "../images/naqsh.svg"

class Results extends Component {
  state = { 
    data: [
      { id: 1, title: "Самореализация девушек в сфере IT", img: R1 },
      { id: 2, title: "Выбор профессии без квалификациии дипломов", img: R2 },
      { id: 3, title: "Возможность зарабатывать дистанционно (фриланс)", img: R3 },
      { id: 4, title: "Возможность начать свои социальные проекты в виде Старт апов", img: R4 },
      { id: 5, title: "Маркетинговые навыки", img: R5 }
    ]
   } 
  render() { 
    return (
      <React.Fragment>
        <div id='results'></div>
        <div className="result">
          <img className='naqsh' src={Naqsh} alt="" />
          <p className='title white'>Результаты</p>
          <p className='description white'>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>
          <div className="result__card">
            {this.state.data.map( (data) => {
                return(
                  <div className="result__item" key={data.id}>
                    <img src={data.img} alt="" />
                    <p>{data.title}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Results;