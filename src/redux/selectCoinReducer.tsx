import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const selectCoin: any = createAsyncThunk<any, any, any>(
  "coin/selectCoin",
  async (dataObj: any, { rejectWithValue }) => {
    try {
      const { exchange, coinName } = dataObj;
      exchange.setSandboxMode(true); //=============
      const response = await exchange.fetchTradingFee(coinName);
      const splittedValue = coinName.split("/");
      const result = {
        limit: splittedValue[1],
        amount: splittedValue[0],
        ...response,
      };
      return result;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {};

const selectCoinSlice: any = createSlice<any, any, any>({
  name: "selectedCoin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectCoin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(selectCoin.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "rejected";
    });
  },
});

export const selectCoinReducer = selectCoinSlice.reducer;
