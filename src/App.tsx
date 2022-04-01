import React, { useEffect } from "react";
// import * as ccxt from "ccxt";

function App() {

useEffect(()=>{
  // console.log(ccxt.exchanges);
  console.log ((window as any).ccxt.exchanges); // print all available exchanges
});


  return (
    <div className="App">
      fwgew
    </div>
  );
}

export default App;
