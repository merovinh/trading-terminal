import { useEffect, useState } from "react";
import {
  StyledInput,
  InputContainer,
  OperationsContainer,
} from "./NumInput.styles";

type valueType = any;
type coinType = any;

const NumInput = ({
  placeholder,
  coin,
  handleValue,
  hookValue,
  accuracy,
  disabled = false,
}: {
  placeholder: string;
  coin: coinType;
  handleValue: any;
  hookValue: any;
  accuracy: any;
  disabled?: boolean;
}) => {
  const [localValue, setLocalValue]: valueType = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    const action = e.target.innerText;
    if (action === "+") {
      if (localValue === "") setLocalValue(0.1);
      else if (isNaN(+localValue)) return;
      else if (!isNaN(+localValue)) setLocalValue(+localValue + 0.1);
    }
    if (action === "-") {
      if (localValue === "") setLocalValue(0.1);
      else if (isNaN(+localValue)) return;
      else if (!isNaN(+localValue)) setLocalValue(+localValue - 0.1);
    }
    console.log("local:", localValue);
    console.log("hook:", hookValue);
  };

  useEffect(() => {
    if (isNaN(+localValue)) handleValue(+hookValue.toFixed(accuracy));
    else if (!isNaN(+localValue)) handleValue((+localValue).toFixed(accuracy));
    console.log(`sub: ${localValue} local: ${localValue} hook: ${hookValue} `);
  }, [localValue]);

  useEffect(() => {
    setLocalValue(hookValue);
  }, [hookValue]);

  return (
    <InputContainer>
      <StyledInput
        autoComplete="off"
        disabled={disabled}
        className={disabled ? "disabled" : ""}
        name={placeholder.toLowerCase()}
        lang="en"
        id={`${placeholder}`}
        type={"text"}
        placeholder={placeholder}
        value={disabled ? "" : localValue}
        onChange={(e) => {
          let subValue: any = e.target.value;
          setLocalValue(subValue);
        }}
      />
      <OperationsContainer>
        <label htmlFor={`${placeholder}`}>
          <p>{coin ? coin[placeholder.toLowerCase()] : null}</p>
        </label>
        <div>
          <button className={disabled ? "disabled" : ""} onClick={handleClick}>
            +
          </button>
          <button className={disabled ? "disabled" : ""} onClick={handleClick}>
            -
          </button>
        </div>
      </OperationsContainer>
    </InputContainer>
  );
};
export default NumInput;
