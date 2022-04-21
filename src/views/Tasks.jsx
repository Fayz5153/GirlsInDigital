import React, { Component } from 'react';

class Tasks extends Component {
  state = { 
    data: [
      { id: "01", title: "Подбор рабочей группы" },
      { id: "02", title: "Установить контакт с партнерами" },
      { id: "03", title: "Закупка офисной техники" },
      { id: "04", title: "Привлечение опытных специалистов (зарубежные специалисты);" },
      { id: "05", title: "Разработка модуля" },
      { id: "06", title: "Освещение  проекта с помощью СМИ" },
      { id: "07", title: "Проведение отбора участников" },
      { id: "08", title: "Организация проекта в 4 этапа" },
      { id: "09", title: "Организация форума и церемония награждения победителей" },
      { id: "10", title: "Мониторинг деятельности участников после окончание проекта, oценка эффективности проекта, составление отчетов" }
    ]
   } 
  render() { 
    return (
      <React.Fragment>
        <div id='tasks'></div>
        <div className="tasks">
          <p className='title white'>Задачи</p>
          <div className="task__card">
            {this.state.data.map( (data, index) => {
                return(
                  <div className="task__item" key={index}>
                    <div className='item'>
                      <span>{data.id}</span>
                      <p>{data.title}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Tasks;