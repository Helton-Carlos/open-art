import { render } from "@testing-library/vue";
import Footer from "./Footer.vue";

describe("Footer component", () => {
  test("Render Footer", () => {
    const component = render(Footer);

    expect(component).toBeDefined();
  });
});
