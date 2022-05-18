import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders: any = createAsyncThunk<any>(
    'orders/fetchOrders',
    async (exchange: any, { rejectWithValue }) => {
        try {
            // exchange.setSandboxMode(true); //=============
            const response = await exchange.fetchOpenOrders();
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const addHandOrders: any = createAsyncThunk<any>(
    'orders/addOrders',
    async (orders, { rejectWithValue }) => {
        try {
            // exchange.setSandboxMode(true); //=============
            return orders;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = {};

const ordersSlice: any = createSlice<any, any, any>({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.data = action.payload;
            state.status = 'rejected';
        });
        builder.addCase(addHandOrders.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(addHandOrders.rejected, (state, action) => {
            state.data = action.payload;
            state.status = 'rejected';
        });
    },
});

export const ordersReducer = ordersSlice.reducer;
