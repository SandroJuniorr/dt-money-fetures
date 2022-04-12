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
    color: ${props=> props.theme.colors.textBody};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 0.75rem 2rem;
  }

  td {
    background-color: ${props=> props.theme.colors.shape} ;
    padding: 1.25rem 2rem;
    color: ${props=> props.theme.colors.textBody};
    border-radius: 0.25rem;

    &.title {
      color: ${props=> props.theme.colors.textTitle};
    }
    &.deposit {
      color:${props=> props.theme.colors.green};
    }
    &.withdraw {
      color: ${props=> props.theme.colors.red};

      &::before {
        content: "- ";
      }
    }
  }
`;
