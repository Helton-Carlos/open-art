import { render } from "@testing-library/vue";
import Title from "../../src/components/Title/Title.vue";

describe("Title component", () => {
  test("Render Title", () => {
    const component = render(Title, {
        props: {
            title: "Main title",
            subTitle: "Main subTitle"
        },
      });

    expect(component).toBeDefined();
  });
});
