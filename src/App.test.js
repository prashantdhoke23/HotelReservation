import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import BookingForm from './bookingForm/BookingForm';
import {validateEmail,validate} from './bookingForm/BookingForm';
import { Router } from 'react-router-dom';

describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    const component = render( <Provider store={store}>
      <App />
  </Provider>);
    const linkElement = component.getByText(/Online Hotel Reservation/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render the booking form submit button on the screen", async () => {
    render(
      <Provider store={store}>
      <App />
  </Provider>
    
  );
    const buttonList = await screen.findAllByRole("button");
    const textInputList = await screen.findAllByRole("textbox");
    expect(buttonList).toHaveLength(3);
    expect(textInputList).toHaveLength(4);
  });

  test("test should failed on email validation",()=> {
    render(
      <Provider store={store}>
       <App />
    </Provider>
    );
    const testEmail="prashant.com";
    expect(validate(testEmail)).not.toBe(true);
  }); 

});


