import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material";
import { StyledItem } from "./CustomSelect.styles";

const CustomSelect = ({
  handleChange,
  value,
}: {
  handleChange: any;
  value: any;
}) => {
  const [exchange, setExchange] = React.useState(value);

  React.useEffect(() => {
    setExchange(value);
  }, [value]);

  const handleSelect = (event: any) => {
    setExchange(event.target.value);
    if (event.currentTarget) {
      const data = event.currentTarget.dataset;

      handleChange(data.value, data.password === "true");
    }
  };

  const theme = createTheme({
    palette: {
      background: {
        paper: "#f2f2f2",
      },
      text: {
        primary: "#173A5E",
        secondary: "#46505A",
      },
      action: {
        active: "#001E3C",
      },
    },
  });

  const renderExchanges = (arr: []) =>
    arr.map((elem: any, index: number) => (
      <MenuItem
        key={index}
        value={elem.ccxtName}
        data-password={elem.needPassword}
        onClick={(event: any) => {
          handleSelect(event);
        }}
      >
        <StyledItem>
          {elem.img && <img alt="img" src={elem.img} width={23} height={23} />}{" "}
          {elem.name}
        </StyledItem>
      </MenuItem>
    ));

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        sx={{
          minWidth: 120,
          backgroundColor: "background.paper",
          borderRadius: "8px",
        }}
      >
        <InputLabel
          sx={{
            borderRadius: "8px",
            padding: "0 5px",
            backgroundColor: "background.paper",
          }}
        >
          Exchange
        </InputLabel>
        <Select
          value={exchange}
          label="Exchange"
          onChange={handleSelect}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          {renderExchanges((window as any).globalConfig.exchanges)}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default CustomSelect;
