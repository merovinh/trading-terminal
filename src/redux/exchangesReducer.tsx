import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExchanges: any = createAsyncThunk<any>(
    'exchange/fetchExchanges',
    async (_, { rejectWithValue }) => {
        try {
            const response = await (window as any).Main.getExchanges();

            return response;
        } catch (error: any) {
            return rejectWithValue(error.response);
        }
    },
);

const initialState = {};

const exchangesSlice: any = createSlice<any, any, any>({
    name: 'exchanges',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchExchanges.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchExchanges.rejected, (state, action) => {
            state.data = action.payload;
            state.status = 'rejected';
        });
    },
});

export const exchangesReducer = exchangesSlice.reducer;
