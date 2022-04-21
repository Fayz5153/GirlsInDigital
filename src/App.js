import React, { Component } from 'react';
import Tasks from './views/Tasks';
import About from './views/About';
import Navbar from './views/Navbar';
import Header from './views/Header';
import Footer from './views/Footer';
import Results from './views/Results';
import ContactUs from './views/ContactUs';
import Directions from './views/Directions';
import Registratsiya from './views/Registratsya';

// import Style
import "./style/css/style.css"
import "./style/css/navbar.css"
import "./style/css/footer.css"
import "./style/css/responsive.css"

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Directions />
          <Tasks />
          <Registratsiya />
          <Results />
          <ContactUs />
          <Footer />
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;