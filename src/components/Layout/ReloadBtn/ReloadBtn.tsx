import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchBalance } from '../../../redux/balanceReducer';
import { fetchCoins } from '../../../redux/coinsReducer';
import { fetchExchanges } from '../../../redux/exchangesReducer';
import { addHandOrders, fetchOrders } from '../../../redux/ordersReducer';
import { Reload } from './ReloadBtn.styles';

const ReloadBtn = () => {
    const ccxt = (window as any).ccxt;
    let kucoin: any = useSelector((state: any) => state.SelectedExchange.data);
    let coins = useSelector((state: any) => state.coins.data);

    const dispatch = useDispatch();
    const handleReload = () => {
        dispatch(fetchCoins(kucoin));
        dispatch(fetchBalance(kucoin));
        dispatch(fetchOrders(kucoin));
        dispatch(fetchExchanges());
        toast.success('Reloaded!');
    };

    const reloadOrders = async (exchange: any) => {
        const orders = await exchange.fetchOpenOrders();
        dispatch(addHandOrders(orders));
    };

    useEffect(() => {
        const intervalId = setInterval(() => reloadOrders(kucoin), 120000);
        return () => clearInterval(intervalId);
    }, [kucoin]);

    return <Reload onClick={handleReload}>↻</Reload>;
};
export default ReloadBtn;
