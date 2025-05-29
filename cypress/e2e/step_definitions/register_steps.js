import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("the user visits the ISTQB exam webpage", () => {
  cy.visit("/");
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

Then("the user sees the message {string}", (message) => {
  cy.get('[datatest-id="mensajesenviarform"]').should("contain.text", message);
});

Then("the user sees the text {string}", (examText) => {
  cy.get('[datatest-id="elementoExamen"]').should("contain.text", examText)
});

When("the user leaves the first name field empty", () => {
  cy.get('[datatest-id="nombreusuario"]').clear();
});

Then("the user should see the message {string}", (message) => {
  cy.get('[datatest-id="mensajesenviarform"]').should("contain.text", message);
});

Then("the user should not see the text the exam element", () => {
  cy.get('[datatest-id="elementoExamen"]').should("not.be.visible");
});

Then("the registration form should be visible", () => {
  cy.get('[datatest-id="formulario"]').should("be.visible");
});