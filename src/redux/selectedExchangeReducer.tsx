import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const selectExchangeSlice = createSlice({
  name: "selectExchange",
  initialState: {},
  reducers: {
    exchangeSelected(state: any, action: any) {
      try {
        const values = action.payload;
        let newExchange: any;
        const ccxt = (window as any).ccxt;
        if (values.needPassword) {
          newExchange = new ccxt[`${values.exchange}`]({
            apiKey: values.apiKey,
            secret: values.apiSecret,
            password: values.password,
            proxy: process.env.REACT_APP_proxy,
          });
        } else {
          newExchange = new ccxt[`${values.exchange}`]({
            apiKey: values.apiKey,
            secret: values.apiSecret,
            proxy: process.env.REACT_APP_proxy,
          });
        }
        state.data = newExchange;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const { exchangeSelected } = selectExchangeSlice.actions;
export const selectExchangeReducer = selectExchangeSlice.reducer;
