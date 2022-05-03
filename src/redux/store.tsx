import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceReducer";
import { coinsReducer } from "./coinsReducer";
import { exchangesReducer } from "./exchangesReducer";
import { feeReducer } from "./feeReducer";
import { ordersReducer } from "./ordersReducer";
import { selectCoinReducer } from "./selectCoinReducer";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    coins: coinsReducer,
    selectedCoin: selectCoinReducer,
    fee: feeReducer,
    orders: ordersReducer,
    exchanges: exchangesReducer,
  },
});
//         SelectedExchange:,
