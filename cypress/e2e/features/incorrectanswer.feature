Feature: See results of a suspended exam

Scenario: Approved exam
  Given the user visits the ISTQB exam webpage "https://edytapukoczqaorganization.github.io/istqb-exam-test/"
  When the user writes a valid name "Ana"
  When the user writes a valid last name "Fernández"
  And the user clicks on the Registrarse button
  And the user responds the first question with correct answer "respuesta1"
  And the user responds the second question with incorrect answer "respuesta1"
  And the user responds the third question with incorrect answer "respuesta1"
  And the user responds the fourth question with incorrect answer "respuesta2"
  And the user responds the fifth question with incorrect answer "respuesta2"
  And the user responds the sixth question with incorrect answer "respuesta2"
  And the user responds the seventh question with incorrect answer "respuesta1"
  And the user responds the eighth question with incorrect answer "respuesta1"
  And the user leaves the ninth answer without response "respuesta4"
  And the user leaves the tenth answer without response "respuesta4"
  And the user clicks the Finalizar examen button
  Then the user can see the number of points for the first question
  And the user can see the number of points for the second question
  And the user can the number of points for the third question
  And the user can see the number of points for the fourth question
  And the user can see the number of points for the fifth question
  And the user can see the number of points for the sixth question
  And the user can see the number of points for the seventh question
  And the user can see the number of points for the eighth question
  And the user can see the number of points for the ninth question
  And the user can see the number of points for the tenth question
  And the message that says "Tu puntuación final" should be red
  And the final score should be 0