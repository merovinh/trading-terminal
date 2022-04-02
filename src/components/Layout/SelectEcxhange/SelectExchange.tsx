import {
  StyledButton,
  StyledGroupHeader,
  StyledGroupOptions,
  StyledGroupRoot,
  StyledListbox,
  StyledOption,
  StyledPopper,
} from "./SelectExchange.styles";
import SelectUnstyled, { SelectUnstyledProps } from "@mui/base/SelectUnstyled";
import OptionGroupUnstyled, {
  OptionGroupUnstyledProps,
} from "@mui/base/OptionGroupUnstyled";
import React from "react";

const SelectExchange = () => {
  function CustomSelect(props: SelectUnstyledProps<string>) {
    const components: SelectUnstyledProps<string>["components"] = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
    return <SelectUnstyled {...props} components={components} />;
  }

  const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
    props: OptionGroupUnstyledProps,
    ref: React.ForwardedRef<any>
  ) {
    const components: OptionGroupUnstyledProps["components"] = {
      Root: StyledGroupRoot,
      Label: StyledGroupHeader,
      List: StyledGroupOptions,
      ...props.components,
    };

    return <OptionGroupUnstyled {...props} ref={ref} components={components} />;
  });

  const choseFunc = (e: any) => {
    console.log(e);
  };

  return (
    <CustomSelect onChange={choseFunc}>
      <CustomOptionGroup label="Hobbits">
        <StyledOption value="Frodo">Frodo</StyledOption>
        <StyledOption value="Sam">Sam</StyledOption>
        <StyledOption value="Merry">Merry</StyledOption>
        <StyledOption value="Pippin">Pippin</StyledOption>
      </CustomOptionGroup>
      <CustomOptionGroup label="Elves">
        <StyledOption value="Galadriel">Galadriel</StyledOption>
        <StyledOption value="Legolas">Legolas</StyledOption>
      </CustomOptionGroup>
    </CustomSelect>
  );
};

export default SelectExchange;
