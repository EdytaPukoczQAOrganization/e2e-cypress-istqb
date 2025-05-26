Feature: See results of an approved exam

Scenario: Approved exam
  Given the user visits the ISTQB exam webpage "https://edytapukoczqaorganization.github.io/istqb-exam-test/"
  When the user enters a valid name "Lucía"
  When the user enters a valid last name "Pérez"
  And the user hits the Registrarse button
  And the user answers the first question with correct answer "respuesta1"
  And the user answers the second question with correct answer "respuesta2"
  And the user answers the third question with correct answer "respuesta2"
  And the user answers the fourth question with correct answer "respuesta3"
  And the user answers the fifth question with correct answer "respuesta3"
  And the user answers the sixth question with correct answer "respuesta3"
  And the user answers the seventh question with correct answer "respuesta3"
  And the user answers the eighth question with correct answer "respuesta3"
  And the user answers the ninth question with incorrect answer "respuesta2"
  And the user leaves 1 answer blank "respuesta4"
  And the user submits the exam by clicking the Finalizar examen button
  Then the user sees the number of points for the first question
  And the user sees the number of points for the second question
  And the user sees the number of points for the third question
  And the user sees the number of points for the fourth question
  And the user sees the number of points for the fifth question
  And the user sees the number of points for the sixth question
  And the user sees the number of points for the seventh question
  And the user sees the number of points for the eighth question
  And the user sees the number of points for the ninth question
  And the user sees the number of points for the tenth question
  And the score text "Tu puntuación final" should be green 