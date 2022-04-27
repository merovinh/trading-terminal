import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: grid;
  width: 500px;
  div {
    height: 50px;
    width: 100%;
  }
  div:nth-of-type(1) {
    background-color: red;
  }
  div:nth-of-type(2) {
    background-color: blue;
  }
  div:nth-of-type(3) {
    background-color: yellow;
  }
  div:nth-of-type(4) {
    background-color: gray;
  }
  div:nth-of-type(5) {
    background-color: orange;
  }
`;
