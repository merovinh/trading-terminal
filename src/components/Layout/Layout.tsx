import { Link } from "react-router-dom";
import { ReloadBtn } from "./ReloadBtn";
import {
  Header,
  BtnLink,
  Navigation,
  HeaderOuterContainer,
  AddExchangeBtn,
  SelectContainer,
} from "./Layout.styles";
import { SelectExchange } from "./SelectEcxhange";
const Layout = ({ children }: any) => {
  return (
    <div>
      <Header>
        <HeaderOuterContainer>
          <Navigation>
            <BtnLink>
              <Link to={"/exchanges"}>Exchanges</Link>
            </BtnLink>
            <BtnLink>
              <Link to={"/terminal"}>Terminal</Link>
            </BtnLink>
            <BtnLink>
              <Link to={"/balances"}>Balances</Link>
            </BtnLink>
          </Navigation>
          <SelectContainer>
            <SelectExchange />
            <AddExchangeBtn>
              <Link to={"/addExchange"}>add</Link>
            </AddExchangeBtn>
          </SelectContainer>
        </HeaderOuterContainer>
        <ReloadBtn />
      </Header>
      {children}
    </div>
  );
};

export default Layout;
