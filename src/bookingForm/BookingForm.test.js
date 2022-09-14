import { getByTestId, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import BookingForm from "./BookingForm";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// import { render, screen } from '@testing-library/react';
import BookingDetailsPage from "./BookingDetailsPage";

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
  // expect(roomtype).toHaveValue("standard");
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
test("date input field should accept date",()=> {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <BookingForm />
    </Provider>
  </BrowserRouter>
  );
  const date=screen.getByLabelText("Selected Date")
  const testDate="09/29/2022";
  userEvent.type(date,testDate);
  expect(date.value).toMatch("09/29/2022");
  expect(date.value).not.toMatch("3");
}); 
test("roomtype input field should accept roomtype",()=> {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <BookingForm />
    </Provider>
  </BrowserRouter>
  );
  const roomTypes=screen.getByPlaceholderText("rooms")
  const testroomType="private";
  //userEvent.type(screen.getByLabelText(roomType,testroomType));
 userEvent.type(roomTypes,testroomType);
 console.log(roomTypes.value);
  expect(roomTypes.value).toMatch("private");
  expect(roomTypes.value).not.toMatch("dorm");
}); 
// test("should be able to submit the form",()=>{
//   render(
//     <BrowserRouter>
//     <Provider store={store}>
//       <BookingForm />
//       <BookingDetailsPage />
//     </Provider>
//   </BrowserRouter>
//   );
//   const submitBtn=screen.getByPlaceholderText("submit");
//   const nameInput=screen.getByLabelText("First Name");
//   const emailInput=screen.getByLabelText("Email Id");
//   const roomTypeInput=screen.getByLabelText("Select Room Type");
//   const noofGuestInput=screen.getByLabelText("Number Of Guest");
//   const dateInput=screen.getByLabelText("Selected Date");

//   userEvent.type(nameInput,"Prashant");
//   userEvent.type(emailInput,"prashant23@gmail.com");
//   userEvent.type(roomTypeInput,"Private");
//   userEvent.type(noofGuestInput,"2");
//   userEvent.type(dateInput,"09/29/2022");
  

//   userEvent.click(submitBtn);
//   const userInfo=screen.getByText("prashant23@gmail.com");
//   expect(userInfo).toBeInTheDocument();


// })

});
