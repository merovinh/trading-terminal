import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const selectCoinSlice = createSlice({
  name: "selectCoin",
  initialState: {},
  reducers: {
    coinSelected(state: any, action: any) {
      const splittedValue = action.payload.split("/");

      state.data = { limit: splittedValue[1], amount: splittedValue[0] };
    },
  },
});

export const { coinSelected } = selectCoinSlice.actions;
export const selectCoinReducer = selectCoinSlice.reducer;
