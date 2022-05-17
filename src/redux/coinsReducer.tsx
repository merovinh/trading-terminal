import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoins: any = createAsyncThunk<any>(
  "coins/fetchCoins",
  async (exchange: any, { rejectWithValue }) => {
    try {
      // exchange.setSandboxMode(true); //=============
      const response = await exchange.fetchMarkets();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {};

const coinsSlice = createSlice<any, any, any>({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "rejected";
    });
  },
});

export const coinsReducer = coinsSlice.reducer;
