Feature: Registro y Login en ParaBank
  Como usuario nuevo
  Quiero poder registrarme y luego iniciar sesión en ParaBank
  Para validar que el flujo de registro y autenticación funciona correctamente

  Scenario: Registro exitoso y login posterior
    Given que el usuario navega al home de ParaBank
    When navega a la página de registro
    And diligencia el formulario de registro con datos aleatorios válidos
    And hace clic en el botón Register
    Then el sistema debe ingresar automáticamente a la nueva cuenta
    When el usuario hace clic en el botón Logout
    And vuelve a la página de login
    And digita el usuario y contraseña recién creados
    And hace clic en el botón Log In
    Then el sistema debe mostrar la cuenta del usuario correctamente 