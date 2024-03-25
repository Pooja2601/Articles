import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Articles from "../Articles";
import mockData from "../../util/mock/mockData.json";

const mock = {
  execute: jest.fn(),
  data: null,
  isLoading: null,
  error: null,
};

const mockResponse = {
  status: "OK",
  copyright:
    "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
  num_results: 20,
  results: [
    {
      uri: "nyt://article/0670b049-30f8-5973-bb41-83bd8735e158",
      url: "https://www.nytimes.com/2024/03/18/style/kristen-stewart-love-lies-bleeding.html",
      id: 100000009361423,
      asset_id: 100000009361423,
      source: "New York Times",
      published_date: "2024-03-18",
      updated: "2024-03-20 22:58:47",
      section: "Style",
      subsection: "",
      nytdsection: "style",
      adx_keywords:
        "Fashion and Apparel;Women and Girls;Lingerie and Underwear;Actors and Actresses;your-feed-fashion;Stewart, Kristen",
      column: null,
      byline: "By Vanessa Friedman",
      type: "Article",
      title: "Kristen Stewart Uses Naked Dressing to Make a Point",
      abstract: "Her press tour for “Love Lies Bleeding” was something to see.",
      des_facet: [
        "Fashion and Apparel",
        "Women and Girls",
        "Lingerie and Underwear",
        "Actors and Actresses",
        "your-feed-fashion",
      ],
      org_facet: [],
      per_facet: ["Stewart, Kristen"],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Kristen Stewart, pantsless at the Los Angeles premiere of “Love Lies Bleeding.”",
          copyright: "Emma Mcintyre/Getty Images",
          approved_for_syndication: 1,
        },
      ],
      eta_id: 0,
    },
  ],
};
// Mocking the fetch function
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: jest.fn(),
}));

jest.mock("../../util/hooks/useFetch", () => ({
  useFetch: () => {
    return mock;
  },
}));

const mockComponent = () => {
  return render(
    <MemoryRouter initialEntries={[{ pathname: "/", search: "", state: {} }]}>
      <Articles />
    </MemoryRouter>
  );
};
describe("<Articles/>", () => {
  it("snapshot testing of render articles", async () => {
    mock.data = mockResponse;
    const component = mockComponent();
    expect(component).toMatchSnapshot();
  });
  it("should render successfully", async () => {
    mock.data = JSON.parse(JSON.stringify(mockData));
    const { getByLabelText } = mockComponent();
    const result = getByLabelText("Search Articles");
    expect(result).toBeInTheDocument();
  });
  it("should render loader", async () => {
    mock.isLoading = true;
    const { getByTestId } = mockComponent();
    const result = getByTestId("Loader");
    expect(result).toBeInTheDocument();
  });
});
