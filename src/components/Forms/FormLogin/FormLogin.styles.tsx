import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "input1 input1"
    "input2 input3"
    "input4 input5"
    "btn-submit btn-submit";
  grid-template-columns: 1fr 1fr;
  padding: 10px 15px;
  gap: 15px;
  justify-items: center;
  div {
    width: 100%;
  }
  div:nth-of-type(1) {
    grid-area: input1;
  }
  div:nth-of-type(2) {
    grid-area: input2;
  }
  div:nth-of-type(3) {
    grid-area: input3;
  }
  div:nth-of-type(4) {
    grid-area: input4;
  }
  div:nth-of-type(5) {
    grid-area: input5;
  }
  button {
    grid-area: btn-submit;
    width: 300px;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 900;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: #6fe962;
    transition: box-shadow 200ms ease, background-color 100ms ease;
    cursor: pointer;
    :hover {
      background-color: #329927;
      color: #f2f2f2;
      box-shadow: 0 3px 0 black;
    }
    :active {
      transform: scale(0.98);
    }
  }
`;
