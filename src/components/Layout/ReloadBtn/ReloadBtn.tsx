import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchBalance } from '../../../redux/balanceReducer';
import { fetchCoins } from '../../../redux/coinsReducer';
import { fetchExchanges } from '../../../redux/exchangesReducer';
import { fetchOrders } from '../../../redux/ordersReducer';
import { Reload } from './ReloadBtn.styles';

const ReloadBtn = () => {
    const ccxt = (window as any).ccxt;
    let kucoin: any = useSelector((state: any) => state.SelectedExchange.data);

    const dispatch = useDispatch();
    const handleReload = () => {
        dispatch(fetchCoins(kucoin));
        dispatch(fetchBalance(kucoin));
        dispatch(fetchOrders(kucoin));
        dispatch(fetchExchanges());
        toast.success('Reloaded!');
    };

    return <Reload onClick={handleReload}>↻</Reload>;
};
export default ReloadBtn;
