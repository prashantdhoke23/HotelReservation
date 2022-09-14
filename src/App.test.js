import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import BookingForm from './bookingForm/BookingForm';
import {validateEmail,validate} from './bookingForm/BookingForm';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

  test("email input field should accept email",()=> {
    render(
      <Provider store={store}>
       <App />
    </Provider>
    );
    const email=screen.getByLabelText("Email Id")
    const testEmail="prashant.com";
    userEvent.type(email,testEmail);
    expect(email.value).not.toMatch("prashant23@gmail.com");
  }); 
  test("name input field should accept name",()=> {
    render(
      <Provider store={store}>
       <App />
    </Provider>
    );
    const name=screen.getByLabelText("First Name")
    const testName="Prashant";
    userEvent.type(name,testName);
    expect(name.value).not.toMatch("PPrashant");
    expect(name.value).toMatch("Prashant");
  }); 
  test("guestno input field should accept guestno",()=> {
    render(
      <Provider store={store}>
       <App />
    </Provider>
    );
    const guestno=screen.getByLabelText("Number Of Guest")
    const testGuestNo="2";
    userEvent.type(guestno,testGuestNo);
    expect(guestno.value).toMatch("2");
    expect(guestno.value).not.toMatch("3");
  }); 

});


