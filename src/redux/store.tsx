import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceReducer";
import { coinsReducer } from "./coinsReducer";
import { ordersReducer } from "./ordersReducer";
import { selectCoinReducer } from "./selectCoinReducer";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    coins: coinsReducer,
    selectedCoin: selectCoinReducer,
    orders: ordersReducer,
  },
});
//         exchange:,
