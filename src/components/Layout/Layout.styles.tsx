import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
  color: #fff;
`;
export const BtnLink = styled.span`
  a {
    color: #fff;
    transition: color 250ms ease;
    transition: text-shadow 250ms ease;
    &:hover {
      color: #c8f7f5;
      text-shadow: 1px 2px 2px black;
    }
  }
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Navigation = styled.nav`
  width: fit-content;
  display: flex;
  gap: 40px;
  background-color: #303030;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-between;
`;

export const HeaderOuterContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const AddExchangeBtn = styled.span`
  background-color: #fff;
  a {
    width: 100%;
    height: 100%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
`;
