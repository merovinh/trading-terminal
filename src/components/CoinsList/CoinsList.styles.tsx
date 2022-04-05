import styled from "@emotion/styled";

export const ListContainer = styled.div`
  width: 200px;
`;
export const InputContainer = styled.div`
  background-color: #242424;
  input,
  div {
    color: #fff;
  }
  label {
    color: #b8b8b8;
  }
`;

export const StyledCoinsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
  background-color: #242424;
  color: #f1f1f1;
  ::-webkit-scrollbar-track {
    border: 1px solid transparent;
    padding: 2px 0;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    transform: rotate(180deg);
  }
`;

export const StyledCoinsItem = styled.li`
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 1px 0 1px 25px;
  overflow-wrap: anywhere;
  cursor: pointer;
  :hover {
    color: #000;
    background-color: #fff;
    font-weight: 500;
  }
`;
