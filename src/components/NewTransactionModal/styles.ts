import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    color: ${props=> props.theme.colors.textTitle};
    margin-bottom: 2rem;
  }
  input {
    display: block;
    width: 100%;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1rem;

    color:${props=> props.theme.colors.inputText};

    background: ${props=> props.theme.colors.inputBackground};
    border: solid 1px ${props=> props.theme.colors.inputBorder};
    border-radius: 0.25rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin-bottom: 1rem;
  }
  .registerTransactionButton {
    width: 100%;
    padding: 1.25rem;
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props=> props.theme.colors.text};
    background:${props=> props.theme.colors.green};

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;

    border-radius: 0.25rem;
  }
`;

type RadioBoxProps = {
  TransactionType: string;
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 4rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;

  background: none;
  color: ${props=> props.theme.colors.textTitle};
  border: solid 1px rgba(150, 156, 178, 0.2);
  border-radius: 0.25rem;

  @media (max-width: 500px) {
    min-width:50%;
    }
  img {
    width: 24px;
    height: 24px;
    margin-right: 1rem;

  }

  &.active {
    background: ${(props) =>
      props.TransactionType == "deposit"
        ? transparentize(0.9, "#33CC95")
        : transparentize(0.9, "#E52E4D")};
  }
`;
