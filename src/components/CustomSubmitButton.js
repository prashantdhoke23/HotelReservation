import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CustomSubmitButton = (onSubmit) => {
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
      {/* <Link to="bookingDetails">
       
      </Link> */}
      <Button
        sx={{ width: "70ch", alignSelf: "center", m: 1, marginLeft: 5 }}
        variant="contained"
        onClick={() => {
        }}
      >
        Submit
      </Button>
    </Box>
  );
};
export default CustomSubmitButton;
