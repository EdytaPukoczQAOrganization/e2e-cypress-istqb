Feature: registro de usuario en la página
    As a student I want to introduce my first and my last name in order to access the examen

    Scenario: Register with the correct name
    Given the user visits the ISTQB exam webpage "https://edytapukoczqaorganization.github.io/istqb-exam-test/"
    When the user introduces his first name "Edyta" 
    And the user introduces his last name "Pukocz"
    Then the user sees the message "BIENVENID@, EDYTA PUKOCZ"
    

    Scenario: Register with an empty name
    Given the user visits the ISTQB exam webpage
    When the user clicks on the Registrarse button
    Then the user sees the error message "El campo es obligatorio y tiene que tener 3 y 30 caracteres"
