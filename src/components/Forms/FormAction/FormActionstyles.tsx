import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  .inputsContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .switchContainer {
    display: flex;
    p {
      transition: color 200ms ease;
      color: #606060;
      :hover {
        color: #fff;
      }
    }
  }
`;

export const SwitchButton = styled.button`
  border: 3px solid #595959;
  width: 100px;
  padding: 5px 0;
  border-radius: 40px;
  font-size: 23px;
  background-color: #272727;
  color: #868686;
  cursor: pointer;
  :hover {
    border-color: #3c3c3c;
    color: #f3f3f3;
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 5px 0;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  transition: text-shadow 200ms ease, box-shadow 200ms ease,
    transform 100ms ease;

  &.sell {
    background-color: #870000;
  }
  &.buy {
    background-color: #37c037;
  }
  :hover {
    box-shadow: 1px 4px 1px black;
    text-shadow: 1px 1.5px 1px black;
  }
  :active {
    transform: scale(0.98);
  }
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  div {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export const ProcentsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  button {
    padding: 2px 5px;
    font-weight: 500;
    background-color: #272727;
    color: #868686;
    border: 1px solid #868686;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      background-color: #404040;
    }
  }
`;
