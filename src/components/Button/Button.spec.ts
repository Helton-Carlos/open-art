import { render, fireEvent } from "@testing-library/vue";
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

  test("Button Title", async () => {
    const { getByText } = render(Button, {
      props: {
        title: "title",
        color: "standard",
      },
    });
    
    const btn  = getByText("title");
    expect(btn.textContent).toBe('title');
  });
});
