import { Link } from "react-router-dom";
import { Header, BtnLink, Navigation } from "./Layout.styles";
import { SelectExchange } from "./SelectEcxhange";
const Layout = ({ children }: any) => {
  return (
    <div>
      <Header>
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
        <div>
          <SelectExchange />
        </div>
      </Header>
      {children}
    </div>
  );
};

export default Layout;
