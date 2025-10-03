import { render } from "@testing-library/vue";
import Menu from "../../src/components/Menu/Menu.vue";

describe("Menu component", () => {
  test("Render Menu", () => {
    const component = render(Menu);

    expect(component).toBeDefined();
  });
});
