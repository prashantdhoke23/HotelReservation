import "./App.css";
import BookingForm from "./bookingForm/BookingForm";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import BookingDetailsPage from "./bookingForm/BookingDetailsPage";
import image from "./components/image/back-img.jpg";
function App() {
  return (
    <>
     <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="bookingDetails" element={<BookingDetailsPage />} />
      </Routes>
           </BrowserRouter>
    </>
     
  );
}

export default App;
