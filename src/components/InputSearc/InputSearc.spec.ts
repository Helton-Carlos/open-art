import { render, fireEvent } from "@testing-library/vue";
import InputSearc from "./InputSearc.vue";

describe("InputSearc component", () => {
  test("Render InputSearc", () => {
    const component = render(InputSearc, {
      props: {
        placeholder: "title",
        type: "text",
        modelValue: "value"
      },
    });

    expect(component).toBeDefined();
  });
});
