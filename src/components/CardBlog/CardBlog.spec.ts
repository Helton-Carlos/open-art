import { render} from "@testing-library/vue";
import CardBlog from "./CardBlog.vue";

describe("CardBlog component", () => {
  test("Render CardBlog", () => {
    const component = render(CardBlog, {
      props: {
        title: 'Open Arts',
        persona: 'Author',
        imageMain: '@/assets/image/art.png',
        imagePersona:  '@/assets/image/person.png'
      },
    });

    expect(component).toBeDefined();
  });

  test("I should test texts", () => {
    const { getByTestId } = render(CardBlog, {
      props: {
        title: 'Open Arts',
        persona: 'Author',
        imageMain: '@/assets/image/art.png',
        imagePersona:  '@/assets/image/person.png'
      },
    });
   
    expect(getByTestId('title-id').textContent).toBe('Open Arts');
    expect(getByTestId('persona-id').textContent).toBe('Author');
  });
});
