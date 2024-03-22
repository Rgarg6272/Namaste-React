import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

test("should render restaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Indian Coffee House");
  expect(name).toBeInTheDocument();
});
