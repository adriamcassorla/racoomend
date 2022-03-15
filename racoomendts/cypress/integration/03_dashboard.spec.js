// @ts-nocheck

describe("Dashboard", () => {
  const randomName = String(Date.now());
  before(() => {
    cy.visit(
      "http://localhost:3000/profile/dashboard/" + Cypress.env("GOOGLE_USER")
    );
  });
  it("should show you the groups you are in list", () => {
    cy.get("#groupsList");
  });
  it("should show you the reccommendation types list", () => {
    cy.get("#categoriesList");
  });
  it("should add a new group", () => {
    cy.findByRole("button", { name: "Add a new group" }).click();
    cy.findByPlaceholderText("Cool name goes here").type(randomName);
    cy.findByRole("button", { name: "Create Group" }).click();
    cy.findByText(randomName);
  });
  it("should add a new recommendation", () => {
    cy.findByText("cool name").click();
    cy.findByRole("button", { name: "Add a new Recomendation" }).click();
    cy.findByPlaceholderText("Title your recommendation").type(randomName);
    cy.findByPlaceholderText("Short description of your recommendation").type(
      "onliner"
    );
    cy.findByPlaceholderText("Provide a url with more relevant info").type(
      "https://www.google.com"
    );
    cy.get("#category").select("Books");
    cy.findByRole("button", { name: "Create Recommendation" }).click();
    cy.findByRole("button", { name: "Books" }).click();
    cy.findByText(randomName);
  });
  it("should remove a recommendation", () => {
    cy.get("#deleteButton").click();
    cy.reload();
    cy.findByText(randomName);
  });
});
