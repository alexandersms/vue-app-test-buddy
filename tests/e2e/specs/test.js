// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Random Counter");
  });

  it("changes counter when button is pressed increment", () => {
    cy.get("#increment").click();
    cy.contains("h2", "Counter 1");
  });

  it("changes counter when button is pressed decrement", () => {
    cy.get("#decrement").click();
    cy.contains("h2", "Counter 0");
  });
});
