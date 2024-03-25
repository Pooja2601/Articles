import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArticlesDetails from "../ArticleDetails";

const location = {
  pathname: "/100000009367911",
  search: "",
  hash: "",
  state: {
    id: 100000009367911,
    title: "Flashback: Your Weekly History Quiz, March 23, 2024",
    desc: "Can you sort 8 historical events?",
    image:
      "https://static01.nyt.com/images/2024/03/22/upshot/flashback-promo/flashback-promo-thumbStandard.jpg",
    author: "",
    url: "https://www.nytimes.com/interactive/2024/03/22/upshot/flashback.html",
  },
  key: "iyfu8ean",
};

// Mocking the fetch function
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: () => {
    return location;
  },
}));

const mockComponent = (props) => {
  return render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: `/:id`,
          search: "",
          state: {},
        },
      ]}
    >
      <ArticlesDetails props={props} />
    </MemoryRouter>
  );
};
describe("<ArticlesDetails/>", () => {
  it("snapshot testing of render article details", async () => {
    const component = mockComponent();
    expect(component).toMatchSnapshot();
  });
  it("should render details", () => {
    const { getByTestId, getByText } = mockComponent();
    const result = getByTestId("articleDetails");
    const actual = getByText(
      "Flashback: Your Weekly History Quiz, March 23, 2024"
    );
    expect(result).toBeTruthy();
    expect(actual).toBeInTheDocument();
  });
});
