import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given("the user visits the ISTQB exam webpage {string}", (website) => {
  cy.visit(website);
});


  When("the user introduces his first name {string}", (name) => {
  cy.get('[datatest-id="nombreusuario"]').clear().type(name);
});

  When("the user introduces his last name {string}", (lastName) => {
  cy.get('[datatest-id="apellidousuario"]').clear().type(lastName);
});

  When("the user presses the Registrarse button", () => {
  cy.get('[datatest-id="botonRegistrarse"]').click();
});

  Then("the user sees the message {string}", (expectedMessage) => {
  cy.get('[datatest-id="mensajesenviarform"]').should("contain.text", expectedMessage);
});

