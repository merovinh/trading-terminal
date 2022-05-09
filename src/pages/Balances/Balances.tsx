import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BalancesList } from "../../components/BalancesList.tsx";
import { fetchBalance } from "../../redux/balanceReducer";

const Balances = () => {
  const dispatch = useDispatch();
  const balances: any = useSelector((state: any) => state.balance.data);
  const exchange = useSelector((state: any) => state.SelectedExchange.data);

  useEffect(() => {
    dispatch(fetchBalance(exchange));
    console.log("1: ", balances);
  }, []);
  useEffect(() => {
    dispatch(fetchBalance(exchange));
    console.log(balances);
  }, [exchange]);

  return (
    <>
      <BalancesList balancesArray={balances?.info.data} />
    </>
  );
};

export default Balances;
