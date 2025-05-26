import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://edytapukoczqaorganization.github.io/istqb-exam-test/");
});

When("the user leaves the first name field empty", () => {
  cy.get('[datatest-id="nombreusuario"]').clear();
});

Then("the user should see the error message {string}", (errorMessage) => {
  cy.get('[datatest-id="mensajesenviarform"]').should("contain.text", errorMessage);
});

Then("the user should not see the text the exam element", () => {
  cy.get('[datatest-id="elementoExamen"]').should("not.be.visible");
});

Then("the registration form should be visible", () => {
  cy.get('[datatest-id="formulario"]').should("be.visible");
});