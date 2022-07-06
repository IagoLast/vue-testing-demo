import userEvent from "@testing-library/user-event";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/vue";
import AppVue from "./App.vue";

describe("<App/>", () => {
  test("should display the results with the query written by the user", async () => {
    const screen = render(<AppVue />);

    await userEvent.type(
      screen.getByLabelText("Search for a cocktail"),
      "margarita"
    );

    await userEvent.click(screen.getByRole("button", { name: "Search" }));

    await waitForElementToBeRemoved(
      screen.queryByRole("heading", { name: "Loading", level: 2 })
    );

    return waitFor(() => {
      expect(screen.queryByText("Margarita")).toBeVisible();
      expect(
        screen.queryByAltText("Image of a Margarita cocktail")
      ).toBeVisible();
    });
  });
});
