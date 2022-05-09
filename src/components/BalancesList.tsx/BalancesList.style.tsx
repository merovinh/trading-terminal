import styled from "@emotion/styled";

export const StyledUl = styled.ul`
  width: 100%;
  height: calc(100vh - 56px - 57px);
  overflow-y: scroll;
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
export const StyledLi = styled.li`
  display: grid;
  grid-template-areas: "img text total available holds";
  grid-template-columns: 80px 1fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 80px;
  padding: 14px 10px;
  font-weight: 400;
  color: #fff;
  background-color: #2e2e2e;
  &:nth-of-type(2n) {
    background-color: #232c2d;
  }

  .logo {
    grid-area: img;
    height: 58px;
    align-items: center;
    justify-self: center;
  }
  .symbol__text {
    grid-area: text;
  }
  .total {
    grid-area: total;
    overflow-wrap: anywhere;
  }
  .available {
    grid-area: available;
    overflow-wrap: anywhere;
  }
  .holds {
    grid-area: holds;
    overflow-wrap: anywhere;
  }
`;

export const Heading = styled.div`
  display: grid;
  grid-template-areas: "text text total available holds";
  grid-template-columns: 80px 1fr 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 30px;
  padding: 14px 10px;
  font-weight: 400;
  gap: 10px;
  color: #fff;
  background-color: #202020;

  .symbol__text {
    grid-area: text;
    padding-left: 20px;
  }
  .total {
    grid-area: total;
  }
  .available {
    grid-area: available;
  }
  .holds {
    grid-area: holds;
  }
`;
