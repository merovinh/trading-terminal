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
  height: 100%;
  a {
    height: 100%;
    width: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    color: #fff;
    &:hover {
      color: #000;
      background-color: #fff;
      transform: scale(1.1);
    }
  }
`;
export const Navigation = styled.nav`
  width: fit-content;
  display: flex;
  background-color: #303030;
  border-radius: 5px;
  justify-content: space-between;
`;

export const HeaderOuterContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const AddExchangeBtn = styled.span`
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0 0.75em 0.75em 0;
  border: 1px solid #cdd2d7;
  a {
    border-radius: 0 0.75em 0.75em 0;
    width: 100%;
    height: 100%;
    padding: 0 13px;
    display: flex;
    align-items: center;
    color: #1f1f1f;
    :hover {
      background: #e7ebf0;
      border-color: #b2bac2;
    }
  }
`;

export const SelectContainer = styled.div`
  display: flex;
`;
