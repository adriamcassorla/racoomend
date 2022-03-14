/// <reference types="cypress"/>

context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should find a welcome message", () => {
    cy.get("h1").contains("Trust your friends, they know you better.");
    cy.get("h3").contains(
      "Spending more time choosing a netflix movie than watching it?"
    );
  });

  it("should appear a raccoon", () => {
    const test = cy.get("img");
    console.log(test);
  });
});
