import * as React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  addEmail,
  addRoomType,
  addFirstName,
  addCheckInDate,
  addNumberOfGuest,
} from "../features/addform/BookingFormSlice";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CustomTextInput from "../components/CumtomTextInput";
import CustomDropdownInput from "../components/CustomDropdownInput";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomSubmitButton from "../components/CustomSubmitButton";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import image from '../components/image/back-img.jpg'; 
import { width } from "@mui/system";
import { WidthFull } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Alert } from "react-bootstrap";

const BookingForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", email: "", roomtype: "", guestnumber: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [roomtypestate, setroomTypeState] = useState("Room Type");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    setShowUser(false);
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const submitData = () => {
    if (isSubmit) {
      navigate("bookingDetails");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    } 
    else if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    // else if (!values.roomtype) {
    //   errors.roomtype = "Please select Room Type";
    // }
    else if (!values.guestnumber) {
      errors.guestnumber = "Please select Guest Number";
    } else if (values.guestnumber < 2) {
      errors.guestnumber = "Minimun guest list should be 2";
    } else {
      setIsSubmit(true);
    }

    return errors;
  };

  return (
   
    <React.Fragment>
       
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

  
       
      <CssBaseline />
      
      <form onSubmit={handleSubmit} class="form-horizontal">
        <h1>Online Hotel Reservation</h1>

        <Container maxWidth="sm">
          <CustomTextInput
            name={"name"}
            value={formValues.name}
            onValueChanged={(e) => {
              const { name, value } = e.target;
              setFormValues({ ...formValues, [name]: value });
              dispatch(addFirstName(e.target.value));
            }}
            label={"First Name"}
          />
          <errors>{formErrors.name}</errors>
          <CustomTextInput
            name={"email"}
            value={formValues.email}
            placeholder="Enter email"
            onValueChanged={(e) => {
              const { name, value } = e.target;
              setFormValues({ ...formValues, [name]: value });
              dispatch(addEmail(e.target.value));
              //setEmail(e.target.value)
            }}
            label={"Email Id"}
          />
          <p>{formErrors.email}</p>
          <CustomDropdownInput
            name={"roomtype"}
            roomtype={roomtypestate}
            label={"Select Room Type"}
            
            handleChange={(e) => {
              setroomTypeState(e.target.value);
              const { name, roomtypestate } = e.target.value;
              setFormValues({ ...formValues, [name]: roomtypestate });
              dispatch(addRoomType(e.target.value));
            }}
          />
          <p>{formErrors.roomtype}</p>
          <CustomTextInput
            name={"guestnumber"}
            value={formValues.guestnumber}
            onValueChanged={(e) => {
              const { name, value } = e.target;
              setFormValues({ ...formValues, [name]: value });
              dispatch(addNumberOfGuest(e.target.value));
            }}
            label={"Number Of Guest"}
          />
          <p>{formErrors.guestnumber}</p>
          <CustomDatePicker
            lable={"Selected Date"}
            date={date}
            handleChange={(e) => {
              var date = new Date(e);
              setDate(date);
              dispatch(addCheckInDate(date.toLocaleDateString()));
            }}
          />
          <button
            style={{ padding: 10, color: "white", backgroundColor: "#2020cf" }}
            onClick={submitData}
          >
            Submit Data
          </button>
        </Container>
      </form>
      </Box>
      </div>
      
    </React.Fragment>
  );
};
export default BookingForm;