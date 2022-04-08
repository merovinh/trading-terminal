import { NumInput } from "../../NumInput";
import {
  ActionButton,
  PricesContainer,
  StyledForm,
  SwitchButton,
} from "./FormActionstyles";

const FormAction = ({
  selectedCoin,
  amountValue,
  handleAmountChange,
  limitValue,
  handleLimitChange,
  handleAction,
  toggleAction,
  action,
  available,
}: any) => {
  const defineCoin = () => {
    if (selectedCoin) {
      return action === "buy" ? selectedCoin.limit : selectedCoin.amount;
    } else return null;
  };
  const defineVolume = () =>
    amountValue && limitValue ? +(amountValue * limitValue).toFixed(11) : 0;
  return (
    <StyledForm>
      <label className="switchContainer">
        <SwitchButton onClick={toggleAction}>
          {action[0].toUpperCase() + action.substr(1)}
        </SwitchButton>
        <p>
          {"<-"}Click
          <br /> to switch mode
        </p>
      </label>
      <div className="inputsContainer">
        <NumInput
          placeholder={"Limit"}
          coin={selectedCoin}
          hookValue={amountValue}
          handleValue={handleAmountChange}
        />
        <NumInput
          placeholder={"Amount"}
          coin={selectedCoin}
          hookValue={limitValue}
          handleValue={handleLimitChange}
        />
      </div>
      <PricesContainer>
        <div>
          <p>Available:</p>
          <p>
            {`${available} `}
            {defineCoin()}
          </p>
        </div>
        <div>
          <p>Volume:</p>
          <p>
            {defineVolume() + " "}
            {selectedCoin ? selectedCoin.limit : null}
          </p>
        </div>
      </PricesContainer>
      <ActionButton className={action} onClick={handleAction}>
        {`${action[0].toUpperCase()}${action.substr(1)}`}
        {selectedCoin ? " " + selectedCoin.amount : null}
      </ActionButton>
    </StyledForm>
  );
};
export default FormAction;
