import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Snacks (12)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(12);
});

test("should change cart by 1 item clicking on add+ button on header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Snacks (12)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(12);

  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument();
});

test("should change cart by 2 item clicking on add+ button on header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Snacks (12)");
  fireEvent.click(accordionHeader);

  //expect(screen.getAllByTestId("foodItems").length).toBe(12);

  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
});

test("should change cart by click on clear cart button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Snacks (12)");
  fireEvent.click(accordionHeader);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(12);

  const emptyText = screen.getByText(
    "Cart is empty. Please Add items in the cart."
  );

  expect(emptyText).toBeInTheDocument();
});
