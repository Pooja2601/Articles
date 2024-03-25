/// <reference types="cypress" />

describe("Render Article list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays articles list", () => {
    cy.get(
      ':nth-child(3) > a > .MuiPaper-root > .MuiList-root > [data-testid="articleList"]'
    ).click();
    cy.wait(1000);
    cy.get("a > .MuiTypography-root").click();
  });
});
