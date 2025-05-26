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

Given("the user visits the ISTQB exam webpage {string}", (website) => {
  cy.visit(website);
});

When("the user introduces his first name {string}", (firstName) => {
  cy.get('[datatest-id="nombreusuario"]').clear().type(firstName);
});

When("the user introduces his last name {string}", (lastName) => {
  cy.get('[datatest-id="apellidousuario"]').clear().type(lastName);
});

When("the user presses the Registrarse button", () => {
  cy.get('[datatest-id="botonRegistrarse"]').click();
});

Then("the user sees the message {string}", (welcomeMessage) => {
  cy.get('[datatest-id="mensajesenviarform"]').should("contain.text", welcomeMessage);
});

Then("the user sees the text {string}", (examText) => {
  cy.get('[datatest-id="elementoExamen"]').should("contain.text", examText)
});
