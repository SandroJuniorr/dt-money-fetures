import styled from "styled-components";

export const Container = styled.div`
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 2rem;
    margin-top: -7rem;


    div{
        background-color: var(--shape) ;
        border-radius:0.25rem ;
        padding: 1.5rem 2rem ;
        color: var(--text-title);

        

        header{
            display: flex ;
            align-items:center ;
            justify-content: space-between ;
        }
        strong{
            display:block ;
            font-size:2rem ;
            margin-top: 1rem;
            font-weight:400;
            line-height:3rem ;
        }

        &.totalCard{
            background-color: var(--green) ;
            color: var(--shape);
        }

    }

    
`