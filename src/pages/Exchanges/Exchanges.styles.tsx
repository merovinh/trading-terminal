import styled from "@emotion/styled";

export const StyledBtn = styled.button`
  padding: 3px 35px;
  font-size: 23px;
  font-weight: 500;
  background-color: rgb(59 175 50);
  border-radius: 10px;
  border: 2px solid black;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: lime;
    color: #000;
  }
`;

export const DeleteBtn = styled.button`
  padding: 5px 15px;
  position: absolute;
  font-size: 16px;
  bottom: 0;
  right: 0;
  margin: 15px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #991010;
  cursor: pointer;
  :hover {
    background-color: #995555;
    color: #fff;
  }
`;
