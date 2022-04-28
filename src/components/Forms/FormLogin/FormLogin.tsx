import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { FormContainer } from "./FormLogin.styles";

const FormLogin = () => {
  return (
    <FormContainer>
      <div>
        <CustomSelect />
      </div>
      <div>
        <CustomInput label={"Name"} />
      </div>
      <div>
        <CustomInput label={"API Key"} />
      </div>
      <div>
        <CustomInput label={"API Secret"} />
      </div>
      <div>
        <CustomInput label={"API Password"} />
      </div>
      <button>Submit</button>
    </FormContainer>
  );
};

export default FormLogin;
