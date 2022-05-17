import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBalance: any = createAsyncThunk<any>(
  "balance/fetchBalance",
  async (exchange: any, { rejectWithValue }) => {
    try {
      // exchange.setSandboxMode(true); //=============
      const response = await exchange.fetchBalance();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {};

const balanceSlice: any = createSlice<any, any, any>({
  name: "balance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchBalance.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "rejected";
    });
  },
});

export const balanceReducer = balanceSlice.reducer;
