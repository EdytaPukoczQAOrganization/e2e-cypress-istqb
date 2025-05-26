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

When("the user writes a valid name {string}", (firstNameIncorrectAnswerStep) => {
  cy.get('[datatest-id="nombreusuario"]').type(firstNameIncorrectAnswerStep);
});

When("the user writes a valid last name {string}", (lastNameIncorrectAnswerStep) => {
  cy.get('[datatest-id="apellidousuario"]').type(lastNameIncorrectAnswerStep);
});

When("the user clicks on the Registrarse button", () => {
  cy.get('[datatest-id="botonRegistrarse"]').click();
});

When("the user responds the first question with correct answer {string}", (examIncorrectAnswerQuestion1) => {
  cy.get('[datatest-id="respuestaExamenNum0"]').select(examIncorrectAnswerQuestion1);
});

When("the user responds the second question with incorrect answer {string}", (examIncorrectAnswerQuestion2) => {
  cy.get('[datatest-id="respuestaExamenNum1"]').select(examIncorrectAnswerQuestion2);
});

When("the user responds the third question with incorrect answer {string}", (examIncorrectAnswerQuestion3) => {
  cy.get('[datatest-id="respuestaExamenNum2"]').select(examIncorrectAnswerQuestion3);
});

When("the user responds the fourth question with incorrect answer {string}", (examIncorrectAnswerQuestion4) => {
  cy.get('[datatest-id="respuestaExamenNum3"]').select(examIncorrectAnswerQuestion4);
});

When("the user responds the fifth question with incorrect answer {string}", (examIncorrectAnswerQuestion5) => {
  cy.get('[datatest-id="respuestaExamenNum4"]').select(examIncorrectAnswerQuestion5);
});

When("the user responds the sixth question with incorrect answer {string}", (examIncorrectAnswerQuestion6) => {
  cy.get('[datatest-id="respuestaExamenNum5"]').select(examIncorrectAnswerQuestion6);
});

When("the user responds the seventh question with incorrect answer {string}", (examIncorrectAnswerQuestion7) => {
  cy.get('[datatest-id="respuestaExamenNum6"]').select(examIncorrectAnswerQuestion7);
});

When("the user responds the eighth question with incorrect answer {string}", (examIncorrectAnswerQuestion8) => {
  cy.get('[datatest-id="respuestaExamenNum7"]').select(examIncorrectAnswerQuestion8);
});

When("the user leaves the ninth answer without response {string}", (examIncorrectAnswerQuestion9) => {
  cy.get('[datatest-id="respuestaExamenNum8"]').select(examIncorrectAnswerQuestion9);
});

When("the user leaves the tenth answer without response {string}", (examIncorrectAnswerQuestion10) => {
  cy.get('[datatest-id="respuestaExamenNum9"]').select(examIncorrectAnswerQuestion10);
});


When("the user clicks the Finalizar examen button", () => {
  cy.get('[datatest-id="buttonCorrectExam"]').click();
});

Then('the user can see the number of points for the first question', () => {
  cy.get('[datatest-id="puntuacionPregunta0"]').should('be.visible');
})

Then('the user can see the number of points for the second question', () => {
  cy.get('[datatest-id="puntuacionPregunta1"]').should('be.visible');
});

Then('the user can the number of points for the third question', () => {
  cy.get('[datatest-id="puntuacionPregunta2"]').should('be.visible');
});

Then('the user can see the number of points for the fourth question', () => {
  cy.get('[datatest-id="puntuacionPregunta3"]').should('be.visible');
});

Then('the user can see the number of points for the fifth question', () => {
  cy.get('[datatest-id="puntuacionPregunta4"]').should('be.visible');
});

Then('the user can see the number of points for the sixth question', () => {
  cy.get('[datatest-id="puntuacionPregunta5"]').should('be.visible');
});

Then('the user can see the number of points for the seventh question', () => {
  cy.get('[datatest-id="puntuacionPregunta6"]').should('be.visible');
});

Then('the user can see the number of points for the eighth question', () => {
  cy.get('[datatest-id="puntuacionPregunta7"]').should('be.visible');
});

Then('the user can see the number of points for the ninth question', () => {
  cy.get('[datatest-id="puntuacionPregunta8"]').should('be.visible');
});

Then('the user can see the number of points for the tenth question', () => {
  cy.get('[datatest-id="puntuacionPregunta9"]').should('be.visible');
});

Then('the message that says "Tu puntuación final" should be red', () => {
  cy.get('[datatest-id="puntuacionalumnofinal"]')
    .should('have.css', 'color')
    .and('eq', 'rgb(255, 0, 0)');
});

Then("the final score should be 0", () => {
  cy.get('[datatest-id="puntuacionalumnofinal"]')
    .invoke('text')
    .then((text) => {
      const score = parseInt(text.match(/\d+/)[0], 10);
      expect(score).to.eq(0);
    });
});

