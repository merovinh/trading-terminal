import styled from "@emotion/styled";

export const StyledInput = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  background-color: #242424;
  width: 100%;
  height: 100%;
  padding: 10px 100px 10px 10px;
  font-size: 18px;
  color: #fff;
  border: 1px solid #595959;
  border-radius: 8px;
  ::placeholder {
    font-weight: 800;
  }
  :focus,
  :hover {
    outline: 1px solid #858585;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 265px;
`;
export const OperationsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100px;
  font-size: 12px;
  overflow-wrap: anywhere;
  color: #fff;
  justify-content: flex-end;
  gap: 3px;
  align-items: center;
  padding-right: 3px;
  div {
    display: flex;
    flex-direction: column;
    gap: 3px;

    button {
      width: 32px;
      height: 17px;
      font-weight: bold;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #757575;
      border-radius: 4px;
      background-color: #303030;
      color: #757575;
      cursor: pointer;
      :hover {
        background-color: #393939;
      }
      :active {
        background-color: #302e2e;
      }
    }
  }
`;
