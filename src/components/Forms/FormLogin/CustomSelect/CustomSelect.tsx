import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material";

const CustomSelect = () => {
  const [exchange, setExchange] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setExchange(event.target.value);
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
        <Select value={exchange} label="Exchange" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>
            {/* <img alt="img" src={require("./5176.jpg")} width={25} height={25} />{" "} */}
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default CustomSelect;
