import styled from "styled-components";

export const Container = styled.table`
  margin-top: 3rem;
  width: 100%;
  text-align: left;
  border-spacing: 0 0.5rem;

  @media (max-width: 535px) {
    th {
      display: none;
    }

    tr {
      display: grid;
      grid-template-areas:
        " title title"
        "amount amount"
        "category date";

      margin-bottom: 1.75rem ;

      td{
        /* padding:0 ; */
      }

      td.title {
        grid-area: title;
        padding-bottom: 0 ;
      }
      td:nth-of-type(2) {
        grid-area: amount;
        padding-top: 0;
        font-size: 1.4rem;
        line-height: 2.1rem;
      }
      td:nth-of-type(3) {
        grid-area: category;
        padding-top:0 ;
      }
      td:nth-of-type(4) {
        grid-area: date;
        text-align:   right;
        padding-top:0 ;

         }
    }
  }

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
    color: var(--text-body);
    border-radius: 0.25rem;

    &.title {
      color: var(--text-title);
    }
    &.deposit {
      color: var(--green);
    }
    &.withdraw {
      color: var(--red);

      &::before {
        content: "- ";
      }
    }
  }
`;
