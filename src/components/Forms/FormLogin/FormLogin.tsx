import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchExchanges } from '../../../redux/exchangesReducer';
import { CustomInput } from '../../CustomInput';
import { CustomSelect } from '../../CustomSelect';
import { FormContainer } from './FormLogin.styles';
import schema from './validationSchema';

const FormLogin = () => {
    const showErrors = (errorsObj: any) => {
        const error: any = Object.values(errorsObj)[0];
        toast.error(error);
    };
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                exchange: '',
                name: '',
                apiKey: '',
                apiSecret: '',
                password: '',
                needPassword: false,
            }}
            validationSchema={schema}
            onSubmit={async (values: any, { resetForm }) => {
                const ccxt = (window as any).ccxt;

                let newExchange: any;
                if (values.needPassword) {
                    newExchange = new ccxt[values.exchange]({
                        apiKey: values.apiKey,
                        secret: values.apiSecret,
                        password: values.password,
                        proxy: (window as any).Main.globalConfig.proxy,
                    });
                } else {
                    newExchange = new ccxt[values.exchange]({
                        apiKey: values.apiKey,
                        secret: values.apiSecret,
                        proxy: (window as any).Main.globalConfig.proxy,
                    });
                }

                const generateUniqueId = () =>
                    Math.random().toString(16).slice(2);

                let exchangeIsAlive: boolean;

                // newExchange.setSandboxMode(true); //====================
                newExchange
                    .fetchBalance()
                    .then((res: any) => (exchangeIsAlive = true))
                    .catch((res: any) => {
                        exchangeIsAlive = false;
                        toast.error(res.message);
                    })
                    .then(() => {
                        if (exchangeIsAlive) {
                            (window as any).Main.addExchange({
                                id: generateUniqueId(),
                                ...values,
                            });

                            resetForm({ values: '' });
                            dispatch(fetchExchanges());
                            toast.success('Add exchange success!');
                        }
                    });
            }}
        >
            {({
                values,
                handleChange,
                handleSubmit,
                touched,
                errors,
                handleBlur,
                setFieldValue,
            }) => (
                <form onSubmit={handleSubmit}>
                    <FormContainer>
                        <div>
                            <CustomSelect
                                handleChange={(
                                    value: string,
                                    needPassword: boolean,
                                ) => {
                                    setFieldValue('exchange', value);
                                    setFieldValue('needPassword', needPassword);
                                }}
                                value={values.exchange}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label={'Name'}
                                handleChange={(value: any) => {
                                    setFieldValue('name', value);
                                }}
                                value={values.name}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label={'API Key'}
                                handleChange={(value: any) => {
                                    setFieldValue('apiKey', value);
                                }}
                                value={values.apiKey}
                            />
                        </div>
                        <div>
                            <CustomInput
                                label={'API Secret'}
                                handleChange={(value: any) => {
                                    setFieldValue('apiSecret', value);
                                }}
                                value={values.apiSecret}
                            />
                        </div>
                        {values.needPassword && (
                            <div>
                                <CustomInput
                                    label={'API Password'}
                                    handleChange={(value: any) => {
                                        setFieldValue('password', value);
                                    }}
                                    value={values.password}
                                />
                            </div>
                        )}
                        <button
                            type={'submit'}
                            onClick={() => showErrors(errors)}
                        >
                            Submit
                        </button>
                    </FormContainer>
                </form>
            )}
        </Formik>
    );
};

export default FormLogin;
