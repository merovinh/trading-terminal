import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
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
  @media screen and (max-width: 1150px) {
    gap: 10px;
    margin-left: 228px;
  }
  @media screen and (max-width: 745px) {
    margin-left: 100px;
  }
`;

export const SwitchButton = styled.button`
  border: 3px solid #595959;
  font-weight: 600;
  width: 70px;
  padding: 5px 10px;
  border-radius: 10px;
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

export const ModesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  p {
    color: #fff;
    cursor: pointer;
    :hover,
    &.chosed {
      color: #56c74d;
    }
  }
`;

export const Errors = styled.span`
  position: absolute;
  color: #acacac;
  font-size: 12px;
  font-weight: 400;
  bottom: 0;
  right: 0;
  display: block;
  text-decoration: underline;
  width: 100%;
  transform: translateY(100%);
`;
