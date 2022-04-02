import { Link } from "react-router-dom";
import { Header, BtnLink, Navigation } from "./Layout.styles";
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
      </Header>
      {children}
    </div>
  );
};

export default Layout;
