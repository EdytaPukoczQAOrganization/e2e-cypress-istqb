Feature: registro de usuario correcto en la página
    As a student I want to introduce my first and my last name in order to access the examen

    Scenario: Register with the correct name
    Given the user visits the ISTQB exam webpage
    When the user introduces his first name "Edyta" 
    And the user introduces his last name "Pukocz"
    And the user presses the Registrarse button
    Then the user sees the message "BIENVENID@, EDYTA PUKOCZ"
    And the user sees the text "Exam"
    
    Scenario: Register with an empty name
    Given the user visits the ISTQB exam webpage
    When the user leaves the first name field empty
    And the user introduces his last name "Pukocz"
    And the user presses the Registrarse button
    Then the user should see the message "El campo es obligatorio y tiene que tener 3 y 30 caracteres"
    And the user should not see the text the exam element
    And the registration form should be visible