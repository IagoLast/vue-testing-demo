import { render } from "@testing-library/vue";
import AppVue from "./App.vue";

describe("<App/>", () => {
  it("renders without crashing", () => {
    const wrapper = render(<AppVue />);
    expect(wrapper.queryByText("Hello World!")).toBeVisible();
  });
});
