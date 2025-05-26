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

When("the user enters a valid name {string}", (firstNameCorrectAnswerStep) => {
  cy.get('[datatest-id="nombreusuario"]').type(firstNameCorrectAnswerStep);
});

When("the user enters a valid last name {string}", (lastNameCorrectAnswerStep) => {
  cy.get('[datatest-id="apellidousuario"]').type(lastNameCorrectAnswerStep);
});

When("the user hits the Registrarse button", () => {
  cy.get('[datatest-id="botonRegistrarse"]').click();
});

When("the user answers the first question with correct answer {string}", (examCorrectAnswerQuestion1) => {
  cy.get('[datatest-id="respuestaExamenNum0"]').select(examCorrectAnswerQuestion1);
});

When("the user answers the second question with correct answer {string}", (examCorrectAnswerQuestion2) => {
  cy.get('[datatest-id="respuestaExamenNum1"]').select(examCorrectAnswerQuestion2);
});

When("the user answers the third question with correct answer {string}", (examCorrectAnswerQuestion3) => {
  cy.get('[datatest-id="respuestaExamenNum2"]').select(examCorrectAnswerQuestion3);
});

When("the user answers the fourth question with correct answer {string}", (examCorrectAnswerQuestion4) => {
  cy.get('[datatest-id="respuestaExamenNum3"]').select(examCorrectAnswerQuestion4);
});

When("the user answers the fifth question with correct answer {string}", (examCorrectAnswerQuestion5) => {
  cy.get('[datatest-id="respuestaExamenNum4"]').select(examCorrectAnswerQuestion5);
});

When("the user answers the sixth question with correct answer {string}", (examCorrectAnswerQuestion6) => {
  cy.get('[datatest-id="respuestaExamenNum5"]').select(examCorrectAnswerQuestion6);
});

When("the user answers the seventh question with correct answer {string}", (examCorrectAnswerQuestion7) => {
  cy.get('[datatest-id="respuestaExamenNum6"]').select(examCorrectAnswerQuestion7);
});

When("the user answers the eighth question with correct answer {string}", (examCorrectAnswerQuestion8) => {
  cy.get('[datatest-id="respuestaExamenNum7"]').select(examCorrectAnswerQuestion8);
});

When("the user answers the ninth question with incorrect answer {string}", (examCorrectAnswerQuestion9) => {
  cy.get('[datatest-id="respuestaExamenNum8"]').select(examCorrectAnswerQuestion9);
});

When("the user leaves 1 answer blank {string}", (examCorrectAnswerQuestion10) => {
  cy.get('[datatest-id="respuestaExamenNum9"]').select(examCorrectAnswerQuestion10);
});

When("the user submits the exam by clicking the Finalizar examen button", () => {
  cy.get('[datatest-id="buttonCorrectExam"]').click();
});

Then('the user sees the number of points for the first question', () => {
  cy.get('[datatest-id="puntuacionPregunta0"]').should('be.visible');
})

Then('the user sees the number of points for the second question', () => {
  cy.get('[datatest-id="puntuacionPregunta1"]').should('be.visible');
});

Then('the user sees the number of points for the third question', () => {
  cy.get('[datatest-id="puntuacionPregunta2"]').should('be.visible');
});

Then('the user sees the number of points for the fourth question', () => {
  cy.get('[datatest-id="puntuacionPregunta3"]').should('be.visible');
});

Then('the user sees the number of points for the fifth question', () => {
  cy.get('[datatest-id="puntuacionPregunta4"]').should('be.visible');
});

Then('the user sees the number of points for the sixth question', () => {
  cy.get('[datatest-id="puntuacionPregunta5"]').should('be.visible');
});

Then('the user sees the number of points for the seventh question', () => {
  cy.get('[datatest-id="puntuacionPregunta6"]').should('be.visible');
});

Then('the user sees the number of points for the eighth question', () => {
  cy.get('[datatest-id="puntuacionPregunta7"]').should('be.visible');
});

Then('the user sees the number of points for the ninth question', () => {
  cy.get('[datatest-id="puntuacionPregunta8"]').should('be.visible');
});

Then('the user sees the number of points for the tenth question', () => {
  cy.get('[datatest-id="puntuacionPregunta9"]').should('be.visible');
});

Then('the score text {string} should be green', () => {
  cy.get('[datatest-id="puntuacionalumnofinal"]')
    .should('have.css', 'color')
    .and('eq', 'rgb(0, 128, 0)');
});

