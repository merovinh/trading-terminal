import numberFormater from "../../../logic/numberFormater";
import { NumInput } from "../../NumInput";
import {
  ActionButton,
  PricesContainer,
  StyledForm,
  SwitchButton,
  ProcentsContainer,
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
  accuracy,
}: any) => {
  const defineCoin = () => {
    if (selectedCoin) {
      return action === "buy" ? selectedCoin.limit : selectedCoin.amount;
    } else return null;
  };
  const defineVolume = () =>
    amountValue && limitValue ? +(amountValue * limitValue) : 0;

  const handleProcentClick = (e: any) => {
    e.preventDefault();
    const procent = +parseInt(e.target.innerText) * 0.01;
    let amountResult: any;
    if (limitValue) {
      amountResult = (procent * available) / limitValue;
    } else amountResult = 0;
    console.log(limitValue);
    handleAmountChange(amountResult.toFixed(accuracy.precision.amount));
  };
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
          hookValue={limitValue}
          handleValue={handleLimitChange}
          accuracy={accuracy.precision.price}
        />
        <NumInput
          placeholder={"Amount"}
          coin={selectedCoin}
          hookValue={amountValue}
          handleValue={handleAmountChange}
          accuracy={accuracy.precision.amount}
        />
        <ProcentsContainer>
          <button onClick={handleProcentClick}>25%</button>
          <button onClick={handleProcentClick}>50%</button>
          <button onClick={handleProcentClick}>75%</button>
          <button onClick={handleProcentClick}>100%</button>
        </ProcentsContainer>
      </div>
      <PricesContainer>
        <div>
          <p>Available:</p>
          <p>
            {`${numberFormater(available)} `}
            {defineCoin()}
          </p>
        </div>
        <div>
          <p>Volume:</p>
          <p>
            {numberFormater(defineVolume()) + " "}
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
