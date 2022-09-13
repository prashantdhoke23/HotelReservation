import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";

const CustomDatePicker = ({ lable, handleChange, date }) => {
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  //   console.log("Selected Date " + newValue);
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={4}>
          <DesktopDatePicker
            label={lable}
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
};
export default CustomDatePicker;
