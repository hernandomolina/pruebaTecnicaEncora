import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { generateUserData, UserData } from '../../src/support/dataGenerator';
import assert from 'assert';
import { Actor } from '../../src/screenplay/actors/Actor';
import { Register } from '../../src/screenplay/tasks/Register';
import { Login } from '../../src/screenplay/tasks/Login';
import { Logout } from '../../src/screenplay/tasks/Logout';
import { IsLoggedIn } from '../../src/screenplay/questions/IsLoggedIn';

setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;
let user: UserData;
let actor: Actor;

Given('que el usuario navega al home de ParaBank', async function () {
  browser = await chromium.launch({ headless: false });
  (globalThis as any).browser = browser;
  const context = await browser.newContext(); // contexto incógnito
  page = await context.newPage();
  actor = new Actor('Usuario QA', page);
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

When('navega a la página de registro', async function () {
  await page.click('text=Register');
  await page.waitForURL('**/register.htm*');
});

When('diligencia el formulario de registro con datos aleatorios válidos', async function () {
  user = generateUserData();
  await actor.attemptsTo(Register(user));
});

When('hace clic en el botón Register', async function () {
  // Ya incluido en la tarea Register
});

Then('el sistema debe ingresar automáticamente a la nueva cuenta', async function () {
  const isLoggedIn = await IsLoggedIn(page);
  assert.ok(isLoggedIn, 'El usuario no fue autenticado automáticamente tras el registro');
});

When('el usuario hace clic en el botón Logout', async function () {
  await actor.attemptsTo(Logout());
  await page.waitForSelector('input[name="username"]');
});

When('vuelve a la página de login', async function () {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

When('digita el usuario y contraseña recién creados', async function () {
  await actor.attemptsTo(Login(user.username, user.password));
});

When('hace clic en el botón Log In', async function () {
  // Ya incluido en la tarea Login
});

Then('el sistema debe mostrar la cuenta del usuario correctamente', async function () {
  const isLoggedIn = await IsLoggedIn(page);
  assert.ok(isLoggedIn, 'El usuario no pudo iniciar sesión con las credenciales recién creadas');
  await browser.close();
}); 