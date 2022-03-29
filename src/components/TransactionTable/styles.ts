import styled from "styled-components";

export const Container = styled.table`
  margin-top: 3rem;
  width: 100%;
  text-align: left;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 0.75rem 2rem;
  }

  td {
    background-color: var(--shape);
    padding: 1.25rem 2rem;
    color:var(--text-body) ;
    border-radius: 0.25rem;

    &.title{
        color:var(--text-title)
    }
    &.deposit{
        color: var(--green)

    }
    &.withdraw{
        color: var(--red);
        
        &::before{
            content:"- " ;
        }

    }
  }

`;
