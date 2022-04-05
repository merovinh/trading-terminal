import { useState } from "react";
import {
  StyledInput,
  InputContainer,
  OperationsContainer,
} from "./NumInput.styles";

const NumInput = ({
  placeholder,
  coin,
}: {
  placeholder: string;
  coin: string;
}) => {
  const [value, setValue]: [number, any] = useState(6);

  const handleClick = (operation: string) => {
    operation === "+"
      ? setValue((prev: number) => +(prev + 0.1).toFixed(13))
      : setValue((prev: number) => +(prev - 0.1).toFixed(13));
  };

  return (
    <InputContainer>
      <StyledInput
        type={"number"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      <OperationsContainer>
        <p>{coin}</p>
        <div>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>
      </OperationsContainer>
    </InputContainer>
  );
};
export default NumInput;

//what we are buying / for what we are buying
//what we are selling / for what we are selling
