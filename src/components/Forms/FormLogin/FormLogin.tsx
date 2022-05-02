import { Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { FormContainer } from "./FormLogin.styles";

const FormLogin = () => {
  return (
    <Formik
      initialValues={{
        exchange: "",
        name: "",
        apiKey: "",
        apiSecret: "",
        password: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        const ccxt = (window as any).ccxt;

        let kucoin: any = new ccxt.kucoin({
          apiKey: values.apiKey,
          secret: values.apiSecret,
          password: values.password,
          proxy: process.env.REACT_APP_proxy,
        });

        // kucoin.setSandboxMode(true);
        // let res = await kucoin.fetchBalance();
        // console.log(res);

        const axios = require("axios").default;

        const generateUniqueId = () => Math.random().toString(16).slice(2);

        axios
          .get("http://localhost:9191/exchanges")
          .then((ae: any) => console.log(ae));
        axios
          .post("http://localhost:9191/add", values, {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((ae: any) => console.log(ae.data));
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
                handleChange={(value: any) => {
                  setFieldValue("exchange", value);
                }}
              />
            </div>
            <div>
              <CustomInput
                label={"Name"}
                handleChange={(value: any) => {
                  setFieldValue("name", value);
                }}
              />
            </div>
            <div>
              <CustomInput
                label={"API Key"}
                handleChange={(value: any) => {
                  setFieldValue("apiKey", value);
                }}
              />
            </div>
            <div>
              <CustomInput
                label={"API Secret"}
                handleChange={(value: any) => {
                  setFieldValue("apiSecret", value);
                }}
              />
            </div>
            <div>
              <CustomInput
                label={"API Password"}
                handleChange={(value: any) => {
                  setFieldValue("password", value);
                }}
              />
            </div>
            <button type={"submit"}>Submit</button>
          </FormContainer>
        </form>
      )}
    </Formik>
  );
};

export default FormLogin;
