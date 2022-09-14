import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import BookingForm from "./BookingForm";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
// import { render, screen } from '@testing-library/react';

describe("Test the Booking Form Component", () => {
  test("header renders with react testing in the document", () => {
    const component = render( 
      <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  );
    const linkElement = component.getByText(/Online Hotel Reservation/i);
    expect(linkElement).toBeInTheDocument();
  });
test("Form field lable", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  );
  const name = screen.getByLabelText("First Name");
  expect(name).toBeInTheDocument();
  const email = screen.getByLabelText("Email Id");
  expect(email).toBeInTheDocument();
  const roomtype = screen.getByLabelText("Select Room Type");
  expect(roomtype).toBeInTheDocument();
  const guestnumber = screen.getByLabelText("Number Of Guest");
  expect(guestnumber).toBeInTheDocument();
  const selecteddate = screen.getByLabelText("Selected Date");
  expect(selecteddate).toBeInTheDocument();
});

// test("Selected Room Type", async () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <BookingForm />
//       </Provider>
//     </BrowserRouter>
//   );
//   const selectoption = screen.getByLabelText("Select Room Type");
//   userEvent.selectOptions(selectoption, "standard");
//   expect(selectoption).toHaveValue("standard");
// });

test("render the booking form submit button on the screen", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  
);
  const buttonList = await screen.findAllByRole("button");
  const textInputList = await screen.findAllByRole("textbox");
  expect(buttonList).toHaveLength(3);
  expect(textInputList).toHaveLength(4);
});

test("email input field should accept email",()=> {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <BookingForm />
    </Provider>
  </BrowserRouter>
  );
  const email=screen.getByLabelText("Email Id")
  const testEmail="prashant.com";
  userEvent.type(email,testEmail);
  expect(email.value).not.toMatch("prashant23@gmail.com");
}); 
test("name input field should accept name",()=> {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <BookingForm />
    </Provider>
  </BrowserRouter>
  );
  const name=screen.getByLabelText("First Name")
  const testName="Prashant";
  userEvent.type(name,testName);
  expect(name.value).not.toMatch("PPrashant");
  expect(name.value).toMatch("Prashant");
}); 
test("guestno input field should accept guestno",()=> {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <BookingForm />
    </Provider>
  </BrowserRouter>
  );
  const guestno=screen.getByLabelText("Number Of Guest")
  const testGuestNo="2";
  userEvent.type(guestno,testGuestNo);
  expect(guestno.value).toMatch("2");
  expect(guestno.value).not.toMatch("3");
}); 


// test("onSubmit to have been called", async () => {
//   // const data = { title: 'Hello', gameType: 'Catan', diceNumber: '2' };
//   const mock = jest.fn();
//   const { getByText } = render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <BookingForm />
//       </Provider>
//     </BrowserRouter>
//   );
//   // Arrange
//   const form = waitFor(() => getByText("Submit Data"));
//   // Act
//   // Assert
//    fireEvent.submit(form);
//   expect(mock).toHaveBeenCalled();
// });

test("navigation test", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  );
  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));
 });
}
