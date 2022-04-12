import styled from 'styled-components';

export const Container = styled.button`

background: transparent ;
display:flex;
align-items: center ;

margin-left: 5px ;

padding:8px ;



svg {
    width:24px ;
    height:24px ;
    color: ${props=> props.theme.colors.text};

    transition: color 0.7s ;

    &:hover{
           color: black; 
        }
}
  
`
