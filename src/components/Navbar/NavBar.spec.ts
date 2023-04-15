import { render } from "@testing-library/vue";
import NavBar from "@/components/Navbar/Navbar.vue";

describe("NavBar component", () => {
  test("Render NavBar", () => {
    const component = render(NavBar);

    expect(component).toBeDefined();
  });
});
