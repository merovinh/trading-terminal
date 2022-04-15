import styled from "@emotion/styled";

export const OrdersContainer = styled.div`
  width: 100%;
  background-color: #242424;

  ul {
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
  }
  div,
  li {
    /* background-color: black; */
    color: #bcbcbc;
    width: 100%;
    display: grid;
    grid-template-areas: "A A B C D F F G G J J L";
    gap: 10px;
    grid-template-columns: 180px 100px 50px 70px repeat(4, 1fr) 50px;
    grid-template-rows: auto;
    align-items: center;
    overflow-wrap: anywhere;
  }
  p:nth-of-type(1n) {
    grid-area: "A";
  }
  p:nth-of-type(2n) {
    grid-area: "B";
  }
  p:nth-of-type(3n) {
    grid-area: "C";
  }
  p:nth-of-type(4n) {
    grid-area: "D";
  }
  p:nth-of-type(5n) {
    grid-area: "F";
  }
  p:nth-of-type(6n) {
    grid-area: "G";
  }
  p:nth-of-type(7n) {
    grid-area: "J";
  }
  p:nth-of-type(8n) {
    grid-area: "L";
  }

  li:nth-of-type(1n) {
  }
  li:nth-of-type(2n) {
    background-color: #232c2d;
  }
  li {
    padding: 10px;
    :hover {
      background-color: #434b52;
      p {
        color: #fff;
      }
    }
    button {
      border: none;
      background-color: transparent;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      :hover {
        color: #57afc5;
      }
    }
  }
  div {
    padding: 10px;
    background-color: #202020;
    color: #fff;
    p {
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 13px;
      overflow-wrap: anywhere;
    }
  }

  @media screen and (max-width: 1380px) {
    div,
    li {
      grid-template-columns: 1fr 1fr 1fr 1fr repeat(4, 1fr) 1fr;
      height: fit-content;
    }
  }
  @media screen and (max-width: 1150px) {
    ul {
      height: calc(33vh);
    }
  }
`;
export const OrdersItem = styled.li`
  font-size: 14px;
`;
