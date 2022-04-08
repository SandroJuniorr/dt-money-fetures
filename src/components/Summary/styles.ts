import styled from "styled-components";

export const Container = styled.div`
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 2rem;
    margin-top: -7rem;

    @media (max-width: 768px){
                overflow-x: auto;
                gap:1rem;
            }


    div{
        background-color: var(--shape) ;
        border-radius:0.25rem ;
        padding: 1.5rem 2rem ;
        color: var(--text-title);

        
        @media (max-width: 768px){
                width:300px;
            }

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
            white-space: nowrap;

            

            @media (max-width: 915px){
                font-size: 1.5rem;
            }
            @media (max-width: 768px){
                font-size: 2rem;
            }
           
        }

        &.totalCard{
            background-color: var(--green) ;
            color: var(--shape);
        }

    }

    
`