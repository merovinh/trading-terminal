import { useDispatch, useSelector } from 'react-redux';
import { ExchangesList } from '../../components/ExchangesList';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { CustomInput } from '../../components/CustomInput';
import { fetchExchanges } from '../../redux/exchangesReducer';
import { StyledBtn, DeleteBtn } from './Exchanges.styles';
import { toast } from 'react-toastify';
import {
    exchangeSelected,
    resetSelectedExchange,
} from '../../redux/selectedExchangeReducer';

const Exchanges = () => {
    const exchanges: any = useSelector((state: any) => state.exchanges.data);
    const selectedId = useSelector((state: any) => state.SelectedExchange.id);
    const [open, setOpen]: [boolean, any] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExchanges());
    }, []);

    const [editObj, setEditObj]: any = useState({
        name: '',
        apiKey: '',
        apiSecret: '',
        password: '',
    });

    const handleEdit = (obj: any = {}) => {
        handleOpen();
        setEditObj(obj);
    };

    const handleObjChange = (value: string, objName: string) => {
        setEditObj({ ...editObj, [objName]: value });
    };

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: '#212121',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '18px 18px 5px 5px',
        padding: '40px 40px 100px',
    };

    const handleSubmit = () => {
        const editingExchange = exchanges.filter(
            (el: any) => el.id === editObj.id,
        )[0];

        const validateExchange = {
            ...editingExchange,
            ...editObj,
            apiKey: editObj.apikey,
        };
        let newExchange: any;
        const ccxt = (window as any).ccxt;
        if (validateExchange.needPassword) {
            newExchange = new ccxt[`${validateExchange.exchange}`]({
                apiKey: validateExchange.apiKey,
                secret: validateExchange.apiSecret,
                password: validateExchange.password,
                proxy: (window as any).Main.globalConfig.proxy,
            });
        } else {
            newExchange = new ccxt[`${validateExchange.exchange}`]({
                apiKey: validateExchange.apiKey,
                secret: validateExchange.apiSecret,
                proxy: (window as any).Main.globalConfig.proxy,
            });
        }
        // newExchange.setSandboxMode(true); //==============================
        newExchange
            .fetchBalance()
            .then((data: any) => {
                (window as any).Main.editExchange(editObj);
                setOpen(false);
                toast.success('Exchange changed!');
            })
            .then(dispatch(exchangeSelected(newExchange)))
            .catch((err: any) => toast.error(err.message));
        dispatch(fetchExchanges());
    };

    const handleDelete = () => {
        (window as any).Main.deleteExchange({ id: editObj.id });
        if (selectedId === editObj.id) {
            dispatch(resetSelectedExchange());
        }
        dispatch(fetchExchanges());
        setOpen(false);
        toast.success('Exchange Deleted!');
    };

    return (
        <>
            <ExchangesList
                exchangesArray={exchanges}
                editFunction={handleEdit}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CustomInput
                        handleChange={(value: string) => {
                            handleObjChange(value, 'name');
                        }}
                        label={'Name'}
                        value={editObj.name}
                    />
                    <CustomInput
                        handleChange={(value: string) => {
                            handleObjChange(value, 'apikey');
                        }}
                        label={'API Key'}
                        value={editObj.apikey}
                    />
                    <CustomInput
                        handleChange={(value: string) => {
                            handleObjChange(value, 'secret');
                        }}
                        label={'API Secret'}
                        value={editObj.secret}
                    />
                    {editObj.password && (
                        <CustomInput
                            handleChange={(value: string) => {
                                handleObjChange(value, 'password');
                            }}
                            label={'Password'}
                            value={editObj.password}
                        />
                    )}
                    <div
                        style={{ width: 'fit-content', margin: '30px auto 0' }}
                    >
                        <StyledBtn onClick={handleSubmit}>Submit</StyledBtn>
                    </div>
                    <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
                </Box>
            </Modal>
        </>
    );
};
export default Exchanges;
