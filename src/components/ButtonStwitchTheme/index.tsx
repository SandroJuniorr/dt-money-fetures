import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
interface ButtonStwitchThemeProps{
   
    changeTheme:  ()=>void
  }

export   const ButtonStwitchTheme: React.FC<ButtonStwitchThemeProps> = ({changeTheme}) => {
const {title} = useContext(ThemeContext)
  return  title === 'ligth'? 

  <Container onClick={changeTheme}>
      <FaSun/>
  </Container> :

  <Container onClick={changeTheme}>
  <FaMoon/>
</Container> 

}

