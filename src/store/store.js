import { configureStore } from '@reduxjs/toolkit'
import BookingFormSlice from '../features/addform/BookingFormSlice'

export default configureStore({
  reducer: {
    bookingFormReducer : BookingFormSlice
  },
})