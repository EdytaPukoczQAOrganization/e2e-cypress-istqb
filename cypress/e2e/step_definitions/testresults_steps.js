import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


When("the user enters a valid name {string}", (firstNameCorrectAnswerStep) => {
  cy.get('[datatest-id="nombreusuario"]').type(firstNameCorrectAnswerStep);
});

When("the user enters a valid last name {string}", (lastNameCorrectAnswerStep) => {
  cy.get('[datatest-id="apellidousuario"]').type(lastNameCorrectAnswerStep);
});

When("the user hits the Registrarse button", () => {
  cy.get('[datatest-id="botonRegistrarse"]').click();
});

When("the user answers the question {string} with {string}", (questionNumber, answer) => {
  cy.get(`[datatest-id="respuestaExamenNum${questionNumber}"]`).select(answer);
});

When("the user submits the exam by clicking the Finalizar examen button", () => {
  cy.get('[datatest-id="buttonCorrectExam"]').click();
});

Then("the user sees {string} points for the question {string}", (points, questionNumber) => {
  cy.get(`[datatest-id="puntuacionPregunta${questionNumber}"]`).should("contain.text", points);
});

Then("the final score should be {string}", (score) => {
  cy.get('[datatest-id="puntuacionalumnofinal"]').should("contain.text", score);
});

Then('the score text {string} should be green', () => {
  cy.get('[datatest-id="puntuacionalumnofinal"]')
    .should('have.css', 'color')
    .and('eq', 'rgb(0, 128, 0)');
});

Then('the message that says {string} should be red', (text) => {
  cy.contains(text).should('have.css', 'color', 'rgb(255, 0, 0)');
});

