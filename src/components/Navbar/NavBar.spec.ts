import { render } from "@testing-library/vue";
import NavBar from "./NavBar.vue";

describe("NavBar component", () => {
  test("Render NavBar", () => {
    const component = render(NavBar);

    expect(component).toBeDefined();
  });
});
