import React, { Component } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import Icons
import Logo from "../icons/logo.svg"

class Navbar extends Component {
  state = { 
    language: 'РУ',
    burger: true,
    scroll: 0
  }
  handleChange = (event) => {
    this.setState({
      language: event.target.value
    });
  };
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  listenToScroll = () => {
      const winScroll =  document.body.scrollTop || document.documentElement.scrollTop

      this.setState({
          scroll: winScroll,
      })
  }
  handleburger = () =>{
    this.setState({
      burger: !this.state.burger
    })
  }
  render() { 
    return (
      <React.Fragment>
        <div className={this.state.scroll < 30 ? 'navbar' : 'navbar nav_scrolled'}>
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Girls in Digital </p>
          </div>
          <div className={this.state.burger ? "nav" : "nav nav__open"}>
            <nav>
              <a onClick={this.handleburger} className='link' href="#about">О Проекте</a>
              <a onClick={this.handleburger} className='link' href="#direction">Направления</a>
              <a onClick={this.handleburger} className='link' href="#tasks">Задачи</a>
              <a onClick={this.handleburger} className='link' href="#results">Результаты</a>
              <a onClick={this.handleburger} className='link' href="#contactus">Контакты</a>
            </nav>
            <div className='nav__right'>
              <FormControl variant="outlined" sx={{ m: 1, minWidth: 30 }}>
                <Select
                  value={this.state.language}
                  onChange={this.handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="РУ">РУ</MenuItem>
                  <MenuItem value="UZB">УЗ</MenuItem>
                </Select>
              </FormControl>
              <a onClick={this.handleburger} href="#registratsiya" className='reg_btn'>Регистрация</a>
            </div>
          </div>
          <button onClick={this.handleburger} className={this.state.burger ? "burger__btn b__open" : "burger__btn b__close"}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Navbar;