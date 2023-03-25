import { render } from "@testing-library/vue";
import Menu from "./Menu.vue";

describe("Menu component", () => {
  test("Render Menu", () => {
    const component = render(Menu);

    expect(component).toBeDefined();
  });
});
