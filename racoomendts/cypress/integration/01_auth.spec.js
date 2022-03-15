// @ts-nocheck
/// <reference types="cypress"/>

describe("Login page", () => {
  it("Start button should guide you to sign in page", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("button", "Start Racoomending").click();
    cy.findByText("Sign In");
  });

  it("should have google and github buttons", () => {
    cy.findByAltText("Google Icon");
    cy.findByAltText("GitHub Icon");
  });

  it("should block access to dashboard if user is not authorised", () => {
    cy.visit("http://localhost:3000/profile/dashboard/adria@adriamartinez.cat");
    cy.get("h2").contains(
      "Don't meddle into other people's issues little raccoon!"
    );
  });

  it("should login with Google and show dashboard", () => {
    cy.visit("http://localhost:3000/login");
    const username = Cypress.env("GOOGLE_USER");
    const password = Cypress.env("GOOGLE_PW");
    const loginUrl = Cypress.env("SITE_NAME");
    const cookieName = Cypress.env("COOKIE_NAME");
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      isPopup: false,
      loginSelector: "#googleSignIn",
      postLoginSelector: "#authorisedPage",
    };

    return cy
      .task("GoogleSocialLogin", socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies();

        const cookie = cookies
          .filter((cookie) => cookie.name === cookieName)
          .pop();
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });

          Cypress.Cookies.defaults({
            preserve: cookieName,
          });
        }
      });
  });
});
