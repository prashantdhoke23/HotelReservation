import "./App.css";
import BookingForm from "./bookingForm/BookingForm";
import { Routes, Route } from "react-router-dom";
import BookingDetailsPage from "./bookingForm/BookingDetailsPage";
import image from "./components/image/back-img.jpg";

function App() {
  return (
    <div 
      className="App" 
      // style={{
      //   backgroundPosition: "center",
      //   backgroundImage: `url(${image})`,
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="bookingDetails" element={<BookingDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
