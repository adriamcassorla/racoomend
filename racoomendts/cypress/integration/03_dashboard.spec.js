// @ts-nocheck

describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:3000/profile/dashboard/" + Cypress.env("GOOGLE_USER")
    );
  });
  it("should show you the groups you are in list", () => {});
  it("should show you the reccommendation types list", () => {});
  it("should add a new group", () => {
    const randomName = String(Date.now());
    cy.findByRole("button", { name: "Add a new group" }).click();
    cy.findByPlaceholderText("Cool name goes here").type(randomName);
    cy.findByRole("button", { name: "Create Group" }).click();
    cy.wait(500);
    cy.get("#groupsList").find(">li").find("h3").contains(randomName);
  });
  it("should add a new recommendation", () => {
    const randomName = String(Date.now());
    cy.findByRole("button", { name: "Add a new testing group" }).click();
    cy.findByRole("button", { name: "Add a new Recomendation" }).click();
    cy.findByPlaceholderText("Title your recommendation").type(randomName);
    cy.findByPlaceholderText("Short description of your recommendation").type(
      randomName
    );
    cy.findByPlaceholderText("Provide a url with more relevant info").type(
      "https://www.google.com"
    );
    cy.findByRole("button", { name: "Create Recommendation" }).click();
    cy.wait(500);
    cy.get("#groupsList").find(">li").find("h3").contains(randomName);
  });
});
