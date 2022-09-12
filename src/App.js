import './App.css';
import BookingForm from './bookingForm/BookingForm';
import './components/image/back-img.jpg';

const myStyle={
//   backgroundImage: 
// "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//   height:'100vh',
//   marginTop:'-50px',
//   fontSize:'20px',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',

}

const imageBack=new URL("./image/back-img.jpg",import.meta.url)
function App() {
  return (
    <div className="App">
      
      <div className='image'>
      <img src='imageBack' />
      </div>
       <BookingForm/>
    </div>
  );
}

export default App;
