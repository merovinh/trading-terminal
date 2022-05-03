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

  const handleSelect = (event: SelectChangeEvent) => {
    setExchange(event.target.value);
    handleChange(event.target.value);
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
          <MenuItem value={"kucoin"}>
            <StyledItem>
              <img
                alt="img"
                src={
                  "https://play-lh.googleusercontent.com/dQ9d57qXuaxTEVwMnS6J4qxVsZLSJYSm-X6zKzV-_w7ClLYh8jSe0J83MhSUgy2kuA"
                }
                width={25}
                height={25}
              />{" "}
              Kucoin
            </StyledItem>
          </MenuItem>
          <MenuItem value={"binance"}>
            <StyledItem>
              {" "}
              <img
                alt="img"
                src={
                  "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png"
                }
                width={25}
                height={25}
              />{" "}
              Binance
            </StyledItem>
          </MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default CustomSelect;
