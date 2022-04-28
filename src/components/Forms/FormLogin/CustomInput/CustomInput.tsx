import { InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const CustomInput = ({ label }: { label: string }) => {
  return (
    <Box>
      <InputLabel
        sx={{
          borderRadius: "8px",
          padding: "0 5px",
          width: "fit-content",
          marginLeft: "5px",
          zIndex: "10",
          transform: "translateY(50%)",
          backgroundColor: "#f2f2f2",
        }}
      >
        {label}
      </InputLabel>
      <TextField
        sx={{
          backgroundColor: "#f2f2f2",
          borderRadius: "3px",
        }}
      />
    </Box>
  );
};
