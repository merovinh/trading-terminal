import { useEffect, useState } from "react";
import { CoinsList } from "../../components/CoinsList";
import { FormAction } from "../../components/Forms/FormAction/";
const Terminal = () => {
  const ccxt = (window as any).ccxt;
  let kucoin: any = new ccxt.kucoin({
    apiKey: process.env.REACT_APP_apiKey,
    secret: process.env.REACT_APP_secret,
    password: process.env.REACT_APP_password,
    proxy: process.env.REACT_APP_proxy,
  });
  console.log(process.env.REACT_APP_apiKey);

  const [coins, setCoins]: [any, any] = useState([]);
  const [selectedCoin, setSelectedCoin]: any = useState(null);

  const [amountValue, setAmountValue]: [any, any] = useState("");
  const [limitValue, setLimitValue]: [any, any] = useState("");

  const [balance, setBalance]: [any, any] = useState(null);
  const [available, setAvailable]: [any, any] = useState(0);

  const handleAmountChange = (value: string | number) => {
    setAmountValue(+value);
  };
  const handleLimitChange = (value: string | number) => {
    setLimitValue(+value);
  };

  const handleClick = (value: string) => {
    const splittedValue = value.split("/");
    setSelectedCoin({ limit: splittedValue[1], amount: splittedValue[0] });
  };

  useEffect(() => {
    kucoin.setSandboxMode(true);
    console.log(kucoin.fetchBalance().then((res: any) => setBalance(res)));
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

  const handleAction = (e: any) => {
    e.preventDefault();
    console.log(selectedCoin);
    kucoin.setSandboxMode(true);
    const actionCoin: string = `${selectedCoin.amount}/${selectedCoin.limit}`;
    console.log();
    kucoin
      .createOrder(actionCoin, "limit", action, amountValue, limitValue)
      .then((data: any) => {
        console.log(data);
        kucoin.fetchOpenOrders().then((res: any) => console.log(res));
      }); // fullified => fetchOrders
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
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
      />
    </div>
  );
};
export default Terminal;
