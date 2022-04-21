import React, { Component } from 'react';
import Map from './Map';

// import Images 
import Web from "../icons/web.svg";
import Call from "../icons/call.svg"; 
import Email from "../icons/email.svg"; 
import Location from "../icons/location.svg";
import Dc from "../images/dc.png";

class ContactUs extends Component {
  state = { 
    data: [
      { id: 1, title: "Веб сайт", img: Web , url: "digitalcity.uz" },
      { id: 2, title: "Телефон", img: Call , url: "+99874 222-22-22"  },
      { id: 3, title: "Почта", img: Email , url: "dcity@info.com" },
      { id: 4, title: "Адресс", img: Location , url: "улица Бобур Шох, Andizhan, Узбекистан" }
    ]
   } 
  render() { 
    return (
      <React.Fragment>
        <div className="contactus" id='contactus'>
          <div className="contacts">
            <div className='DC'>
              <img src={Dc} alt="" />
            </div>

            {this.state.data.map( (data) => {
              return(
                <div className="contact__item" key={data.id}>
                  <div><img src={data.img} alt="" /></div>
                  <div>
                    <p>{data.title}</p>
                    <p>{data.url}</p>
                  </div>
                  
                </div>
              )
            })}
          </div>
          <div className="map">
            <Map />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default ContactUs;