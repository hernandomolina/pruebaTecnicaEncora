# Prueba Técnica Encora

Repositorio con la prueba técnica para el Rol de QA en Encora.

## Tecnologías utilizadas
- **TypeScript**
- **Playwright** (automatización de navegador)
- **Cucumber** (BDD, pruebas con Gherkin)
- **Allure** (reportes de pruebas)
- **Faker** (generación de datos aleatorios)

## Estructura del proyecto
```
pruebaTecnicaEncora/
├── src/
│   ├── screenplay/
│   │   ├── actors/         # Definición de actores
│   │   ├── tasks/          # Tareas compuestas (Login, Register, Logout)
│   │   ├── interactions/   # Acciones atómicas (ClickButton, FillField)
│   │   └── questions/      # Consultas/Verificaciones (IsLoggedIn)
│   └── support/            # Utilidades y generación de datos
├── features/
│   ├── *.feature           # Escenarios en Gherkin
│   └── step_definitions/   # Implementación de pasos en TypeScript
├── allure-results/         # Resultados de pruebas para Allure
├── allure-report/          # Reporte HTML generado por Allure
├── .github/workflows/      # Workflows de GitHub Actions (CI/CD)
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
└── README.md
```

## Ejemplo de Feature (Gherkin)
```gherkin
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
```

## Generación de datos aleatorios
Se utiliza Faker para crear usuarios únicos en cada ejecución:
```ts
import { generateUserData } from '../src/support/dataGenerator';
const user = generateUserData();
```

## Ejecución de pruebas local
1. Instala dependencias:
   ```bash
   npm ci
   ```
2. Instala los navegadores de Playwright:
   ```bash
   npx playwright install --with-deps
   ```
3. Ejecuta las pruebas:
   ```bash
   npm test
   ```
4. Genera y abre el reporte Allure:
   ```bash
   npm run allure:generate
   npm run allure:open
   ```

## CI/CD con GitHub Actions
El proyecto incluye un workflow que:
- Instala dependencias y navegadores
- Ejecuta las pruebas de Cucumber
- Genera el reporte Allure
- Publica el reporte en GitHub Pages (rama `gh-pages`)

Archivo: `.github/workflows/playwright-allure.yml`

## Scripts útiles
- `npm test` — Ejecuta las pruebas con Cucumber y Playwright
- `npm run allure:generate` — Genera el reporte Allure
- `npm run allure:open` — Abre el reporte Allure en el navegador

## Notas
- El patrón Screenplay facilita la mantenibilidad y escalabilidad de las pruebas.
- Los datos de usuario se generan aleatoriamente en cada ejecución para evitar colisiones.

---

**Autor:** [Tu Nombre]
