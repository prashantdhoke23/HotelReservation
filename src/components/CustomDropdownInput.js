import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "standard",
    label: "Standard",
  },
  {
    value: "private",
    label: "Private",
  },
  {
    value: "dorm",
    label: "Dorm",
  },
];

const CustomDropdownInput = ({ label, handleChange, roomtype,name }) => {
  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "70ch" },
        marginTop: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          name={name}
          label={label}
          value={roomtype}
          onChange={handleChange}
          helperText="Please select your Room Type"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
export default CustomDropdownInput;
