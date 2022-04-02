import { selectUnstyledClasses } from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";

import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

export const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: 20px;
    min-width: 200px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 0.75em;
    
    padding: 7px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `
);

export const StyledListbox = styled("ul")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `
);

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
    `
);

export const StyledGroupRoot = styled("li")`
  list-style: none;
`;

export const StyledGroupHeader = styled("span")`
  display: block;
  padding: 15px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;

export const StyledGroupOptions = styled("ul")`
  list-style: none;
  margin-left: 0;
  padding: 0;

  > li {
    padding-left: 20px;
  }
`;

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
