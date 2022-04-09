import { useState } from "react";
import {
  StyledInput,
  InputContainer,
  OperationsContainer,
} from "./NumInput.styles";

type valueType = [string | number | null, any];
type coinType = any;

const NumInput = ({
  placeholder,
  coin,
  handleValue,
  hookValue,
  accuracy,
}: {
  placeholder: string;
  coin: coinType;
  handleValue: any;
  hookValue: any;
  accuracy: any;
}) => {
  // const [value, setValue]: valueType = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    let newValue: number;
    if (e.target.innerText === "+") {
      newValue = hookValue !== "" ? +(hookValue + 0.1).toFixed(accuracy) : 0.1;
    } else {
      newValue = +(hookValue - 0.1).toFixed(accuracy);
    }
    handleValue(newValue);
  };

  return (
    <InputContainer>
      <StyledInput
        lang="en"
        id={`${placeholder}`}
        type={"number"}
        placeholder={placeholder}
        value={hookValue}
        onChange={(e) => handleValue((+e.target.value).toFixed(accuracy))}
      />
      <OperationsContainer>
        <label htmlFor={`${placeholder}`}>
          <p>{coin ? coin[placeholder.toLowerCase()] : null}</p>
        </label>
        <div>
          <button onClick={handleClick}>+</button>
          <button onClick={handleClick}>-</button>
        </div>
      </OperationsContainer>
    </InputContainer>
  );
};
export default NumInput;

//what we are buying / for what we are buying
//what we are selling / for what we are selling
