import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

Given ("the user visits the ISTQB exam webpage {string}"), (website) => {
    cy.visit(website);
  };

When ("the user introduces his first name {string}"), (name) => {
  //Limpiamos el campo y luego obtenemos el elemento nombre y lo rellenamos
  cy.get('[datatest-id="nombreusuario"]').clear();
  cy.get('[datatest-id="nombreusuario"]').type(name);
};

When ("the user introduces his last name {string}"), (lastName) => {
  //Limpiamos el campo y luego obtenemos el elemento apellido y lo rellenamos
  cy.get('[datatest-id="nombreusuario"]').clear();
  cy.get('[datatest-id="nombreusuario"]').type(lastName);

  };


Then ("then the user sees the message Bienvenido and his first and last name", () => {
  //Obtenemos el elemento mensaje de bienvenida y comprobamos que tenga el texto exacto
  cy.get('datatest-id="mensajeenviarform').should('have.text',"Bienvenid@");


  });