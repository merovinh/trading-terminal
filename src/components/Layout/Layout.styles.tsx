import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #1f1f1f;
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
