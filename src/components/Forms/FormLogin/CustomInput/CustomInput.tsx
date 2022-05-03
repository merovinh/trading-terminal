import { InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const CustomInput = ({
  label,
  handleChange,
  value,
}: {
  label: string;
  handleChange: any;
  value: any;
}) => {
  const handleType = (e: any) => {
    handleChange(e.target.value);
  };

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
        autoComplete="off"
        sx={{
          backgroundColor: "#f2f2f2",
          borderRadius: "3px",
        }}
        onChange={handleType}
        value={value}
      />
    </Box>
  );
};
