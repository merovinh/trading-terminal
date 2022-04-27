import { useDispatch } from "react-redux";
import { fetchBalance } from "../../../redux/balanceReducer";
import { fetchCoins } from "../../../redux/coinsReducer";
import { fetchOrders } from "../../../redux/ordersReducer";
import { Reload } from "./ReloadBtn.styles";

const ReloadBtn = () => {
  const ccxt = (window as any).ccxt;
  let kucoin: any = new ccxt.kucoin({
    apiKey: process.env.REACT_APP_apiKey,
    secret: process.env.REACT_APP_secret,
    password: process.env.REACT_APP_password,
    proxy: process.env.REACT_APP_proxy,
  });

  const dispatch = useDispatch();
  const handleReload = () => {
    dispatch(fetchCoins(kucoin));
    dispatch(fetchBalance(kucoin));
    dispatch(fetchOrders(kucoin));
  };

  return <Reload onClick={handleReload}>↻</Reload>;
};
export default ReloadBtn;
