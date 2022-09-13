import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Text } from "react";
import image from '../components/image/back-img.jpg'; 

const BookingDetailsPage = () => {
  const formSelector = useSelector((state) => state.bookingFormReducer);

  return (
    <div
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "#dedada",
        backgroundImage:`url(${image})`
      }}
    >
      <Box
        color="gray"
        bgcolor="white"
        mt={2}
        borderRadius="1%"
        sx={{ p: "10", margin: 20 }}
      >
        <div style={{ margin: 20 }}>
          <h1>Booking Confirmed</h1>
          <div className="fieldContainer">
            <div style={{ flex: 1 }}>
              <h3>Name</h3>
              <h3>Email</h3>
              <h3>Number of Guest</h3>
              <h3>Check In Date</h3>
              <h3>Room Type</h3>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 10 }}>{formSelector.firstName}</h2>
              <h2 style={{ margin: 10 }}>{formSelector.emailId}</h2>
              <h2 style={{ margin: 10 }}>{formSelector.numberOfGuest}</h2>
              <h2 style={{ margin: 10 }}>{formSelector.checkInDate}</h2>
              <h2 style={{ margin: 10 }}>{formSelector.roomType}</h2>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default BookingDetailsPage;
