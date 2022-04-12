import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin:0px ;
    padding:0px ;
    box-sizing: border-box ;

  }
  html{
        @media (max-width:1080px){
             font-size:93.75%;
         }
         @media (max-width:720px){
             font-size:87.5%;
         }
     }

  /* :root{
    --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --background: #F0F2F5;
        --shape:#FFFFFF;
        --input-background:#E7E9EE;
        --input-border:#D7D7D7;
  } */
  body,input,textarea,button,h1,h2,h3,h4,h5,h6,strong{
         font-family: 'poppins' , sans-serif;
  }
  body{
    background: ${props=> props.theme.colors.background} ;
  }
          
     
        

  button{
    cursor: pointer;
    border: none ;
  }
  .react-modal-overlay{
    position:fixed ;
    top:0 ;
    right:0;
    bottom:0 ;
    left:0 ;
    background: rgba(0,0,0,0.5) ;
    

    display: flex ;
    align-items:center ;
    justify-content: center ;

    @media (max-width: 500px) {
      align-items: flex-end ;
    }
    
  }
  .react-modal-content{
    background:${props=> props.theme.colors.background} ;
    width:100% ;
    max-width: 576px ;
    padding: 4rem 3rem ;
    border-radius:0.25rem ;

    position:relative;

    
  }

  .Close-Modal{
        position:absolute;
        top:1.5rem;
        right:1.5rem ;
        border: 0;
        background: transparent;
        transition: filter 2s ;
        
        &:hover{
          filter: brightness(0.2) ;
        }
    }
`