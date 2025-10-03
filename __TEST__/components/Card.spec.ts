import { render} from "@testing-library/vue";
import Card from "../../src/components/Card/Card.vue";

describe("Card component", () => {
  test("Render Card", () => {
    const component = render(Card, {
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
    const { getByTestId } = render(Card, {
      props: {
        title: 'Open Arts',
        persona: 'Author',
        imageMain: '@/assets/image/art.png',
        imagePersona:  '@/assets/image/person.png',
        context: true
      },
    });
   
    expect(getByTestId('title-id').textContent).toBe('Open Arts');
    expect(getByTestId('persona-id').textContent).toBe('Author');
  });
});
