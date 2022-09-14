import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import BookingDetailsPage from "./BookingDetailsPage";

test("Booking Details Lable and heading",async  () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BookingDetailsPage />
      </Provider>
    </BrowserRouter>
  );
  const headingList = await screen.findAllByRole("heading");
  expect(headingList).toHaveLength(11);
  expect(screen.getByText("Booking Confirmed")).toBeInTheDocument();
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Number of Guest")).toBeInTheDocument();
  expect(screen.getByText("Check In Date")).toBeInTheDocument();
  expect(screen.getByText("Room Type")).toBeInTheDocument();
});

test("Booking Details ",async  () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <BookingDetailsPage />
        </Provider>
      </BrowserRouter>
    );
    const headingList = await screen.findAllByRole("heading");
    expect(headingList).toHaveLength(11);
    expect(screen.getByText("Booking Confirmed")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Number of Guest")).toBeInTheDocument();
    expect(screen.getByText("Check In Date")).toBeInTheDocument();
    expect(screen.getByText("Room Type")).toBeInTheDocument();
  });
