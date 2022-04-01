import React, { useEffect } from "react";
import * as ccxt from "ccxt";

function App() {
  const ccxt = (window as any).ccxt;

useEffect(()=>{
  console.log (ccxt.exchanges); // print all available exchanges
  let kucoin:any = new ccxt.kucoin();
});

  return (
    <div className="App">
    </div>
  );
}

export default App;
