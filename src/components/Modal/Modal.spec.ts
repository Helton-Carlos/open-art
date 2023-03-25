import { render } from "@testing-library/vue";
import Modal from "./Modal.vue";

describe("Modal component", () => {
  test("Render Modal", () => {
    const component = render(Modal, {
      props: {
        title: "title",
        subtitle: "standard",
      },
    });

    expect(component).toBeDefined();
  });
});
