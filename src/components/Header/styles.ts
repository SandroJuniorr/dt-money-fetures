import styled from "styled-components";


export const Container = styled.header`
    background: ${props=> props.theme.colors.blue}

`

export const Content = styled.div`
    max-width: 1120px ;
    margin: 0 auto ;
    padding: 2rem 1rem 12rem;

    display: flex ;
    align-items: center ;
    justify-content: space-between;

    div {
        display:flex ;
        align-items:center ;
        button:first-child{
        background-color: ${props=> props.theme.colors.blueLight};
        color: ${props=> props.theme.colors.text};
        font-size:1rem;
        font-weight: 600;

        padding: 0 2rem ;
        border-radius: 0.25rem ;
        height: 3rem ;
        transition: filter 0.7s ;

        &:hover{
            filter:brightness(0.9) ;
        }
        

    }
    
    }



`
