Feature: See results of an approved exam

Scenario: Approved exam
  Given the user visits the ISTQB exam webpage
  When the user enters a valid name "Lucía"
  When the user enters a valid last name "Pérez"
  And the user hits the Registrarse button
  And the user answers the question "0" with "respuesta1"
  And the user answers the question "1" with "respuesta2"
  And the user answers the question "2" with "respuesta2"
  And the user answers the question "3" with "respuesta3"
  And the user answers the question "4" with "respuesta3"
  And the user answers the question "5" with "respuesta3"
  And the user answers the question "6" with "respuesta3"
  And the user answers the question "7" with "respuesta3"
  And the user answers the question "8" with "respuesta2"
  And the user submits the exam by clicking the Finalizar examen button
  Then the user sees "2" points for the question "0"
  And the user sees "2" points for the question "1"
  And the user sees "2" points for the question "2"
  And the user sees "2" points for the question "3"
  And the user sees "2" points for the question "4"
  And the user sees "2" points for the question "5"
  And the user sees "2" points for the question "6"
  And the user sees "2" points for the question "7"
  And the score text "Tu puntuación final" should be green 
  And the final score should be "15"


Scenario: Suspended exam
  Given the user visits the ISTQB exam webpage
  When the user enters a valid name "Ana"
  When the user enters a valid last name "Fernández"
  And the user hits the Registrarse button
  And the user answers the question "0" with "respuesta1"
  And the user answers the question "1" with "respuesta1"
  And the user answers the question "2" with "respuesta1"
  And the user answers the question "3" with "respuesta2"
  And the user answers the question "4" with "respuesta2"
  And the user answers the question "5" with "respuesta2"
  And the user answers the question "6" with "respuesta1"
  And the user answers the question "7" with "respuesta1"
  And the user submits the exam by clicking the Finalizar examen button
  Then the user sees "2" points for the question "0"
  And the user sees "-1" points for the question "1"
  And the user sees "-1" points for the question "2"
  And the user sees "-1" points for the question "3"
  And the user sees "-1" points for the question "4"
  And the user sees "-1" points for the question "5"
  And the user sees "-1" points for the question "6"
  And the user sees "-1" points for the question "7"
  And the message that says "Tu puntuación final" should be red
  And the final score should be "0"