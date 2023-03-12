import { render} from "@testing-library/vue";
import Card from "./Card.vue";

describe("Card component", () => {
  test("Render Card", () => {
    const component = render(Card, {
      props: {
        title: 'Open Arts',
        persona: 'Author',
        imageMain: '@/assets/art.png',
        imagePersona:  '@/assets/person.png'
      },
    });

    expect(component).toBeDefined();
  });

  test("I should test texts", () => {
    const { getByTestId } = render(Card, {
      props: {
        title: 'Open Arts',
        persona: 'Author',
        imageMain: '@/assets/art.png',
        imagePersona:  '@/assets/person.png'
      },
    });
   
    expect(getByTestId('title-id').textContent).toBe('Open Arts');
    expect(getByTestId('persona-id').textContent).toBe('Author');
  });
});
