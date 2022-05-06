import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchanges } from "../../../redux/exchangesReducer";
import { exchangeSelected } from "../../../redux/selectedExchangeReducer";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { borderColor } from "@mui/system";

const SelectExchange = () => {
  const dispatch = useDispatch();
  const exchanges = useSelector((state: any) => state.exchanges.data || []);
  const lastExchange: any = window.localStorage.getItem("lastExchange");
  console.log(lastExchange);

  const [selected, setSelected]: any = useState(
    JSON.parse(lastExchange) || { name: "", id: "" }
  );

  useEffect(() => {
    dispatch(fetchExchanges()).then((data: any) => {
      const exchange = data.payload.filter(
        (elem: any) => elem.id === selected.id
      );
      console.log(exchange[0], data.payload);
      if (exchange[0]) {
        dispatch(exchangeSelected(exchange[0]));
      } else {
        setSelected({ name: "", id: "" });
      }
    });
  }, []);

  useEffect(() => {
    console.log(exchanges);
  }, []);

  useEffect(
    () => window.localStorage.setItem("lastExchange", JSON.stringify(selected)),
    [selected]
  );

  const renderExchanges = () =>
    exchanges.map((elem: any) => (
      <MenuItem
        key={elem.id}
        value={`${elem.name}`}
        data-id={elem.id}
        onClick={handleSelect}
      >
        {elem.name}
      </MenuItem>
    ));

  const handleSelect = (e: any) => {
    const exchange = exchanges.filter(
      (elem: any) => elem.id === e.currentTarget.dataset.id
    )[0];
    dispatch(exchangeSelected(exchange));
    setSelected({
      name: e.currentTarget.dataset.value,
      id: e.currentTarget.dataset.id,
    });
  };

  return (
    <>
      <FormControl>
        <InputLabel
          id="demo-simple-select-helper-label"
          sx={{
            backgroundColor: "#fff",
            padding: "0 3px",
            borderRadius: "4px",
          }}
        >
          Exchange
        </InputLabel>
        <Select
          disabled={!exchanges.length}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selected.name}
          label="Exchange"
          // onChange={handleSelect}
          sx={{
            m: 0,
            // padding: "5.5px 14px",
            minWidth: 200,
            minHeight: "100%",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "4px 0 0 4px",
          }}
        >
          {renderExchanges()}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectExchange;
