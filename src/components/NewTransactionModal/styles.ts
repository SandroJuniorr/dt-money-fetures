import {  transparentize } from "polished";
import styled from "styled-components";


export const Container = styled.form `
    
    
    h1{
        font-size:1.5rem ;
        font-weight: 600;
        line-height: 2rem ;
        color:var(--text-title);
        margin-bottom: 2rem ;
    }
    input{
        display:block ;
        width:100% ;
        padding: 1.25rem 1.5rem ;
        margin-bottom:1rem;

        background: var(--input-background);
        border:solid 1px var(--input-border);
        border-radius:0.25rem ;

        &:last-of-type{
            margin-bottom:0 ;
        }
            
       
    }
    div{
        display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

        margin-bottom:1rem ;

        
        
    }
    .registerTransactionButton{
        width:100% ;
        padding: 1.25rem;
        margin-top:1.5rem ;

        display:flex ;
        align-items: center ;
        justify-content:center ;

        color:var(--shape);
        background:var(--green) ;

        font-size:1rem ;
        font-weight:600 ;
        line-height:1.5rem ;

        border-radius:0.25rem;
    }


`;

type RadioBoxProps = {
    TransactionType: string;
}

export const RadioBox = styled.button<RadioBoxProps>`


            display:flex ;
            align-items: center ;
            justify-content:center ;
            padding: 1.25rem 4rem;

            font-size:1rem ;
            font-weight:400 ;
            line-height:1.5rem ;

            background: none;
            color:var(--text-title);
            border: solid 1px rgba(150, 156, 178, 0.2);
            border-radius:0.25rem ;
            img{
                width:24px ;
                height:24px ;
                margin-right:1rem ;
            }
        
        &.active{
            background: ${(props)=>props.TransactionType == 'deposit' ? transparentize(0.9,"#33CC95") : transparentize(0.9,"#E52E4D") }
        }
`



