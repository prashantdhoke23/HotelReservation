import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const CustomTextInput = ({ label, onValueChanged, value, name }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
        marginTop: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        name={name}
        value={value}
        onChange={onValueChanged}
        label={label}
        variant="outlined"
      />
    </Box>
  );
};
export default CustomTextInput;
