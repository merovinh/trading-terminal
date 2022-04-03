import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Balances } from "./pages/Balances";
import { Exchanges } from "./pages/Exchanges";
import { Terminal } from "./pages/Terminal";
import * as ccxt from "ccxt";
import { Layout } from "./components/Layout";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./Global.styles";
import { AddExchange } from "./pages/AddExchange";

function App() {
  const ccxt = (window as any).ccxt;

  useEffect(() => {
    console.log(ccxt.exchanges); // print all available exchanges
    let kucoin: any = new ccxt.kucoin();
  });

  return (
    <div className="App">
      <Global styles={GlobalStyles}></Global>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate replace to="/Terminal" />}></Route>
          <Route
            path="/terminal"
            element={
              <Layout>
                <Terminal />
              </Layout>
            }
          ></Route>
          <Route
            path="/exchanges"
            element={
              <Layout>
                <Exchanges />
              </Layout>
            }
          ></Route>
          <Route
            path="/balances"
            element={
              <Layout>
                <Balances />
              </Layout>
            }
          ></Route>
          <Route
            path="/addExchange"
            element={
              <Layout>
                <AddExchange />
              </Layout>
            }
          ></Route>
          <Route path="/" element={<Navigate replace to="/Terminal" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
