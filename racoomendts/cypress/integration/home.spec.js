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

  it("images should have alt text", () => {
    cy.get("img").each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
    });
  });

  it("should have a start button", () => {
    cy.findByRole("button", "Start Racoomending").click();
  });
});

context("Log In Button", () => {
  it("Start button should guide you to sign in page", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("button", "Start Racoomending").click();
    cy.findByText("Sign In");
  });

  it("should have google and github buttons", () => {
    cy.findByAltText("Google Icon");
    cy.findByAltText("GitHub Icon");
  });
});

context("Not authorised user", () => {
  it("should block access to dashboard if user is not authorised", () => {
    cy.visit("http://localhost:3000/profile/dashboard/adria@adriamartinez.cat");
    cy.get("h2").contains(
      "Don't meddle into other people's issues little raccoon!"
    );
  });
});
