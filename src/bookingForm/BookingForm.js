import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomTextInput from '../components/CumtomTextInput';
import CustomDropdownInput from '../components/CustomDropdownInput';
import CustomDatePicker from '../components/CustomDatePicker';
import CustomSubmitButton from '../components/CustomSubmitButton';
import { useState, useEffect } from "react";
import CustomDropDownRoom from '../components/CustomDropDownRoom';


const BookingForm=()=>{
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const searchHotel=(e)=>{
    console.log(e)
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    
    return errors;
  };
    return (
      <div className="container">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
  
        <form onSubmit={handleSubmit}>
          <h1>Online Hotel Reservation</h1>
          
          <div className="ui divider"></div>
          <div className="ui form">
            <div id="right" className="field">
              <label>Name </label> 
              <input
                type="text"
                name="name"
                placeholder="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.name}</p>
            <div  className="field" id='right'>
              <label>Email</label> 
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            {/* <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p> */}
            <CustomDropDownRoom />
            <CustomDropdownInput />
            <CustomDatePicker />
            <button className="fluid ui button blue" onClick={searchHotel}>Search</button>
          </div>
        </form>
      </div>
      
    );
}

export default BookingForm