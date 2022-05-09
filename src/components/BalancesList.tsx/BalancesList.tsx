import numberFormater from "../../logic/numberFormater";
import { Heading, StyledLi, StyledUl } from "./BalancesList.style";

const BalancesList = ({ balancesArray }: any) => {
  const imgPopularCoinsObj: any = {
    USDT: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    ETH: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png",
    BTC: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
  };

  const renderBalances = (arr: [any]) =>
    arr?.map((el) => (
      <StyledLi key={el.id}>
        {imgPopularCoinsObj[el.currency] && (
          <img className="logo" src={imgPopularCoinsObj[el.currency]} />
        )}

        <p className="symbol__text">{el.currency}</p>
        <p className="total">{numberFormater(+el.balance)}</p>
        <p className="available">{numberFormater(+el.available)}</p>
        <p className="holds">{numberFormater(+el.holds)}</p>
      </StyledLi>
    ));

  return (
    <>
      <Heading>
        <p className="symbol__text">Coin</p>
        <p className="total">Total</p>
        <p className="available">Available amount</p>
        <p className="holds">In orders</p>
      </Heading>
      <StyledUl>
        {renderBalances(balancesArray) || "no available balances"}
      </StyledUl>
    </>
  );
};
export default BalancesList;
