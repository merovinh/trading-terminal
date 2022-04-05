import { useEffect, useState } from "react";
import { CoinsList } from "../../components/CoinsList";
import { NumInput } from "../../components/NumInput";

const Terminal = () => {
  const ccxt = (window as any).ccxt;
  let kucoin: any = new ccxt.kucoin({
    apiKey: "624acd53c8c02f000164b10f",
    secret: "60a3ee00-a7c4-4377-859d-334d37f7e8ab",
    password: "testing",
    proxy: "https://cors-proxy.crawler.link/",
  });

  const [coins, setCoins]: [any, any] = useState([]);
  const [selectedCoin, setSelectedCoin]: any = useState(null);

  const handleClick = (value: string) => {
    console.log(value);
    setSelectedCoin(value);
  };

  useEffect(() => {
    kucoin.fetchMarkets().then((res: any) => setCoins(res));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <CoinsList coins={coins} selectCoin={handleClick} />
      <NumInput placeholder={"Limit"} coin={selectedCoin} />
    </div>
  );
};
export default Terminal;
