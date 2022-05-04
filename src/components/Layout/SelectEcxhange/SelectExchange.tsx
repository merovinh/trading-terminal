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
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchanges } from "../../../redux/exchangesReducer";
import { exchangeSelected } from "../../../redux/selectedExchangeReducer";

const SelectExchange = () => {
  const dispatch = useDispatch();
  const exchanges = useSelector((state: any) => state.exchanges.data || []);
  const [saved, setSaved]: any = useState("fwef");

  useEffect(() => {
    dispatch(fetchExchanges());
    const red: any = window.localStorage.getItem("selectedExchange");
    setSaved(JSON.parse(red));
    return;
  }, []);

  const renderExchanges = () =>
    exchanges.map((elem: any) => (
      <StyledOption key={elem.id} value={`${elem.id}`}>
        {elem.name}
      </StyledOption>
    ));
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

  const handleSelect = (e: any) => {
    const exchange = exchanges.filter((elem: any) => elem.id === e);
    dispatch(exchangeSelected(exchange[0]));
    window.localStorage.setItem(
      "selectedExchange",
      JSON.stringify({ id: e, name: exchange[0].name })
    );
    console.log(saved);
  };

  return (
    <CustomSelect
      value={saved.name}
      disabled={!exchanges.length}
      onChange={handleSelect}
    >
      {renderExchanges()}
    </CustomSelect>
  );
};

export default SelectExchange;
