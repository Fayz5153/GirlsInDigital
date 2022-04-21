import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Registratsiya extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="registratsiya" id="registratsiya">
          <p className='title black'>Регистрация</p>
          <Box
            component="form" 
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='reg__form'>
              <TextField id="standard-basic" label="Имя" variant="standard" />
              <TextField id="standard-basic" label="Фамилия" variant="standard" />
              <TextField id="standard-basic" label="Дата рождения" variant="standard" />
              <TextField id="standard-basic" label="Почта" variant="standard" />
              <TextField id="standard-basic" label="Адрес" variant="standard" />
              <TextField id="standard-basic" label="Телефон" variant="standard" />
            </div>
            <a href="#registratsiya" className='reg_btn'>Отправить</a>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Registratsiya;