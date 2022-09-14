import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import BookingForm from "./BookingForm";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

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

test("test cases over the button", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  );
  const buttonlist = await screen.findAllByRole("button");
  expect(buttonlist).toHaveLength(3);
  const submitbutton = await screen.getByRole("button", {
    name: "Submit Data",
  });
  expect(submitbutton).not.toBeDisabled();
  userEvent.click(submitbutton);
  expect(submitbutton).toHaveStyle({
    backgroundColor: "#2020cf",
    color: "white",
  });
});

test("render email input", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  );
  const inputEl = screen.getByLabelText("Email Id");
  expect(inputEl).toBeInTheDocument();
  userEvent.type(inputEl, "test@gmail.com");
  expect(inputEl).toHaveValue("test@gmail.com");
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
