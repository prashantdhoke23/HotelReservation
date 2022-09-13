import { createSlice } from '@reduxjs/toolkit'

export const BookingFormSlice = createSlice({
  name: 'counter',
  initialState: {
    firstName:'',
    emailId:'',
    roomType:'',
    numberOfGuest:0,
    checkInDate:''
  },
  reducers: {

    addFirstName:(state,action)=>{
        state.firstName = action.payload;
    },

    addEmail:(state,action)=>{
        state.emailId = action.payload;
    },

    addRoomType:(state,action)=>{
        state.roomType = action.payload;
    },

    addNumberOfGuest:(state,action)=>{
        state.numberOfGuest = action.payload;
    },

    addCheckInDate:(state,action)=>{
        state.checkInDate = action.payload;
    },
  },
})

export const { addFirstName, addEmail, addRoomType,addNumberOfGuest,addCheckInDate } = BookingFormSlice.actions

export default BookingFormSlice.reducer