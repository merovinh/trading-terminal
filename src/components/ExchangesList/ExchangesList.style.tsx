import styled from "@emotion/styled";

export const StyledLi = styled.li`
  display: flex;
  gap: 15px;
  color: #fff;
  p {
    font-weight: lighter;
  }
  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 420px;
    overflow-wrap: anywhere;
    padding: 10px 15px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: #3f3f3f;
  }
  div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    padding: 0 10px;
    width: 100%;
    background-color: #3f3f3f;

    button {
      padding: 6px 13px;
      background-color: #dddddd;
      cursor: pointer;
      border-radius: 5px;
      :hover {
        background-color: #f1f1f1;
      }
    }
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;
`;

export const StyledBtn = styled.button`
  padding: 5px 15px;
  font-size: 23px;
  font-weight: 500;
  background-color: #454545;
`;
