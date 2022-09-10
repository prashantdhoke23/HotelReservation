import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomTextInput from '../components/CumtomTextInput';
import CustomDropdownInput from '../components/CustomDropdownInput';
import CustomDatePicker from '../components/CustomDatePicker';
import CustomSubmitButton from '../components/CustomSubmitButton';


const BookingForm=()=>{
    return  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">

        <CustomTextInput
        label={'First Name'}
        /> 

        <CustomTextInput
        label={'Email Id'}
        /> 

        <CustomDropdownInput/>

        <CustomTextInput
        label={'Number of guest'}
        /> 

        <CustomDatePicker/>

        <CustomSubmitButton/>

    </Container>
  </React.Fragment>
}

export default BookingForm