import { render } from "@testing-library/vue";
import Button from "./Button.vue";

describe("Button component", () => {
  test("Render Button", () => {
    const component = render(Button, {
      props: {
        title: "title",
      },
    });

    expect(component).toBeDefined();
  });

  test("Props Button", async () => {
    const component = render(Button, {
      props: {
        title: "title",
        color: "standard",
      },
    });

    expect(component.getByText("title")).toBeDefined();
  });
});
