import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const selectExchangeSlice = createSlice({
    name: 'selectExchange',
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
                        proxy: (window as any).Main.globalConfig.proxy,
                    });
                } else {
                    newExchange = new ccxt[`${values.exchange}`]({
                        apiKey: values.apiKey,
                        secret: values.apiSecret,
                        proxy: (window as any).Main.globalConfig.proxy,
                    });
                }
                state.data = newExchange;
                state.name = values.name;
                state.id = values.id;
            } catch (err) {
                console.log(err);
            }
        },
        resetSelectedExchange: (state: any) => {
            state.data = {};
            state.name = '';
            state.id = '';
        },
    },
});

export const { exchangeSelected, resetSelectedExchange } =
    selectExchangeSlice.actions;
export const selectExchangeReducer = selectExchangeSlice.reducer;
