import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFee: any = createAsyncThunk<any, any, any>(
  "fee/currentCoinFee",
  async (dataObj: any, { rejectWithValue }) => {
    try {
      const { exchange, coinName } = dataObj;
      exchange.setSandboxMode(true); //=============
      const response = await exchange.fetchTradingFee(coinName);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {};

const fetchFeeSlice: any = createSlice<any, any, any>({
  name: "fee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFee.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchFee.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "rejected";
    });
  },
});

export const feeReducer = fetchFeeSlice.reducer;
