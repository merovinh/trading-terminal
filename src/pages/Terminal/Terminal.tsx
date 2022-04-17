import { isString } from "formik";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CoinsList } from "../../components/CoinsList";
import { FormAction } from "../../components/Forms/FormAction/";
import { isNotValidFormAction } from "../../components/Forms/FormAction/validate";
import { OrdersList } from "../../components/OrdersList";
import { TerminalContainer } from "./Terminal.style";
const Terminal = () => {
  const ccxt = (window as any).ccxt;
  let kucoin: any = new ccxt.kucoin({
    apiKey: process.env.REACT_APP_apiKey,
    secret: process.env.REACT_APP_secret,
    password: process.env.REACT_APP_password,
    proxy: process.env.REACT_APP_proxy,
  });

  const [coins, setCoins]: [any, any] = useState([]);
  const [selectedCoin, setSelectedCoin]: any = useState(null);

  const [accuracy, setAccuracy] = useState({
    precision: { price: 11, amount: 11 },
  });

  const [amountValue, setAmountValue]: [any, any] = useState("");
  const [limitValue, setLimitValue]: [any, any] = useState("");

  const [balance, setBalance]: [any, any] = useState(null);
  const [available, setAvailable]: [any, any] = useState(0);
  const [valid, setValid]: [string | boolean, any] =
    useState("Please select coin");

  const [fee, setFee] = useState({ maker: 0, taker: 0 });

  const [orders, setOrders] = useState([]);

  const [mode, setMode] = useState("limit");

  const handleModeChange = (value: string) => setMode(value);

  const handleAmountChange = (value: string | number) => {
    const stringValue = value.toString();
    if (stringValue[stringValue.length - 1] === ".") {
      setAmountValue(value);
    } else setAmountValue(+value);
  };
  const handleLimitChange = (value: string | number) => {
    const stringValue = value.toString();
    if (stringValue[stringValue.length - 1] === ".") {
      setLimitValue(value);
    } else setLimitValue(+value);
  };

  const handleClick = (value: string) => {
    const splittedValue = value.split("/");
    setSelectedCoin({ limit: splittedValue[1], amount: splittedValue[0] });
    let accuracy: any;
    for (let key of coins) {
      if (key.symbol === value) accuracy = key;
    }
    setAccuracy(accuracy);
    kucoin.setSandboxMode(true);
    kucoin.fetchTradingFee(value).then((res: any) => {
      const response: { taker: number; maker: number } = res
        ? { taker: res.taker, maker: res.maker }
        : { taker: 0, maker: 0 };
      setFee(response);
    });
  };

  useEffect(() => {
    kucoin.setSandboxMode(true);
    console.log(
      kucoin.fetchBalance().then((res: any) => {
        setBalance(res);
      })
    );
    kucoin.fetchMarkets().then((res: any) => setCoins(res));
  }, []);

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

  const handleOrders = useCallback(() => {
    kucoin.setSandboxMode(true);
    kucoin.fetchOpenOrders().then((res: any) => {
      setOrders(res);
    });
  }, [kucoin]);

  useEffect(() => {
    handleOrders();
  }, [balance]);

  useEffect(() => {
    isNotValidFormAction(mode, amountValue, limitValue, setValid);
  }, [amountValue, limitValue, mode]);

  const handleAction = (e: any) => {
    e.preventDefault();
    isNotValidFormAction(mode, amountValue, limitValue, setValid);
    console.log(valid);
    if (!selectedCoin) return toast.error("Please select coin!");
    if (isString(valid)) return toast.error(valid);
    console.log(selectedCoin);
    kucoin.setSandboxMode(true);
    const actionCoin: string = `${selectedCoin.amount}/${selectedCoin.limit}`;
    const limitUpMode = mode === "limit" ? limitValue : undefined;
    console.log();

    kucoin
      .createOrder(actionCoin, mode, action, amountValue, limitUpMode)
      .then((data: any) => {
        kucoin.fetchBalance().then((res: any) => {
          setBalance(res);
        });
        console.log(data);
        toast.success("Success!");
      }) // fullified => fetchOrders
      .catch((res: any) => {
        toast.error(res.message);
        console.log(res);
      });
  };
  console.log(kucoin.markets);

  const cancelOrder = (orderId: string, symbol: string) => {
    kucoin.setSandboxMode(true);
    kucoin.cancelOrder(orderId, symbol).then((res: any) => {
      kucoin.fetchBalance().then((res: any) => {
        setBalance(res);
      });
      handleOrders();
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
