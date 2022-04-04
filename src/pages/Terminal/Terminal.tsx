import { useEffect, useState } from "react";
import { CoinsList } from "../../components/CoinsList";

const Terminal = () => {
  const ccxt = (window as any).ccxt;
  let kucoin: any = new ccxt.kucoin({
    apiKey: "624acd53c8c02f000164b10f",
    secret: "60a3ee00-a7c4-4377-859d-334d37f7e8ab",
    password: "testing",
    proxy: "https://cors-proxy.crawler.link/",
  });

  const [coins, setCoins]: [any, any] = useState([]);

  useEffect(() => {
    kucoin.fetchMarkets().then((res: any) => setCoins(res));
  }, []);

  return (
    <div>
      <CoinsList coins={coins} />
    </div>
  );
};
export default Terminal;
