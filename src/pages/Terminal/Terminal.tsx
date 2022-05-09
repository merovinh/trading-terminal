import { isString } from "formik";
import { stat } from "fs";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CoinsList } from "../../components/CoinsList";
import { FormAction } from "../../components/Forms/FormAction/";
import { isNotValidFormAction } from "../../components/Forms/FormAction/validate";
import { OrdersList } from "../../components/OrdersList";
import { fetchBalance } from "../../redux/balanceReducer";
import { fetchCoins } from "../../redux/coinsReducer";
import { fetchFee } from "../../redux/feeReducer";
import { fetchOrders } from "../../redux/ordersReducer";
import { coinSelected } from "../../redux/selectCoinReducer";
import { store } from "../../redux/store";
import { TerminalContainer } from "./Terminal.style";
const Terminal = () => {
  const ccxt = (window as any).ccxt;
  let kucoin: any = useSelector((state: any) => state.SelectedExchange.data);

  const dispatch = useDispatch();
  let balance = useSelector((state: any) =>
    state.balance.data ? state.balance.data : null
  );

  let coins: any = useSelector((state: any) =>
    state.coins.data ? state.coins.data : []
  );

  let selectedCoin = useSelector((state: any) =>
    state.selectedCoin.data ? state.selectedCoin.data : null
  );

  const [accuracy, setAccuracy] = useState({
    precision: { price: 11, amount: 11 },
  });

  const [amountValue, setAmountValue]: [any, any] = useState("");
  const [limitValue, setLimitValue]: [any, any] = useState("");

  const [available, setAvailable]: [any, any] = useState(0);
  const [valid, setValid]: [string | boolean, any] =
    useState("Please select coin");

  let fee = useSelector((state: any) =>
    state.fee.data ? state.fee.data : { maker: 0, taker: 0 }
  );

  let orders = useSelector((state: any) =>
    state.orders.data ? state.orders.data : []
  );

  const [mode, setMode] = useState("limit");

  const handleModeChange = (value: string) => setMode(value);

  const handleAmountChange = (value: string | number) => {
    setAmountValue(+value);
  };
  const handleLimitChange = (value: string | number) => {
    setLimitValue(+value);
  };

  const handleClick = (value: string) => {
    const splittedValue = value.split("/");
    dispatch(coinSelected(value));
    dispatch(fetchFee({ exchange: kucoin, coinName: value }));
    let accuracy: any;
    for (let key of coins) {
      if (key.symbol === value) accuracy = key;
    }
    setAccuracy(accuracy);
  };

  useEffect(() => {
    dispatch(fetchBalance(kucoin));
    dispatch(fetchCoins(kucoin));
    dispatch(fetchOrders(kucoin));
  }, [kucoin]);

  const [action, setAction] = useState("buy");
  const toggleAction = (e: any) => {
    e.preventDefault();
    action === "buy" ? setAction("sell") : setAction("buy");
  };

  useEffect(() => {
    const handleBalance = () => {
      let result: any;
      if (balance && selectedCoin) {
        const currency =
          action === "buy" ? selectedCoin.limit : selectedCoin.amount;
        if (balance[currency]) result = balance[currency].free;
      } else result = 0;

      setAvailable(result ? result : 0);
    };
    handleBalance();
  }, [action, balance, selectedCoin]);

  useEffect(() => {
    dispatch(fetchOrders(kucoin));
  }, [balance]);

  useEffect(() => {
    isNotValidFormAction(mode, amountValue, limitValue, setValid);
  }, [amountValue, limitValue, mode]);

  const handleAction = (e: any) => {
    e.preventDefault();
    isNotValidFormAction(mode, amountValue, limitValue, setValid);
    if (!selectedCoin) return toast.error("Please select coin!");
    if (isString(valid)) return toast.error(valid);
    kucoin.setSandboxMode(true); //=========================
    const actionCoin: string = `${selectedCoin.amount}/${selectedCoin.limit}`;
    const limitUpMode = mode === "limit" ? limitValue : undefined;

    kucoin
      .createOrder(actionCoin, mode, action, amountValue, limitUpMode)
      .then((data: any) => {
        dispatch(fetchBalance(kucoin));
        toast.success("Success!");
      }) // fullified => fetchOrders
      .catch((res: any) => {
        toast.error(res.message);
      });
  };

  const cancelOrder = (orderId: string, symbol: string) => {
    kucoin.setSandboxMode(true); //=========================
    kucoin.cancelOrder(orderId, symbol).then((res: any) => {
      dispatch(fetchBalance(kucoin));
      dispatch(fetchOrders(kucoin));
    });
  };

  return (
    <TerminalContainer>
      <CoinsList coins={coins} selectCoin={handleClick} />
      <FormAction
        selectedCoin={selectedCoin}
        amountValue={amountValue}
        handleAmountChange={handleAmountChange}
        limitValue={limitValue}
        handleLimitChange={handleLimitChange}
        handleAction={handleAction}
        toggleAction={toggleAction}
        action={action}
        available={available}
        accuracy={accuracy}
        mode={mode}
        handleModeChange={handleModeChange}
        fee={fee}
      />
      <OrdersList ordersArray={orders} cancelFunction={cancelOrder} />
    </TerminalContainer>
  );
};
export default Terminal;
