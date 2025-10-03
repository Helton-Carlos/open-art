import { render } from "@testing-library/vue";
import Modal from "../../src/components/Modal/Modal.vue";

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
