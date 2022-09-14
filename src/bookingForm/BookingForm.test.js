import { getByTestId, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import BookingForm from "./BookingForm";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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

test("Selected Room Type", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingForm />
      </Provider>
    </BrowserRouter>
  );
  const selectoption = screen.getByLabelText("Select Room Type");
  userEvent.selectOptions(selectoption, "standard");
  expect(selectoption).toHaveValue("standard");
});
