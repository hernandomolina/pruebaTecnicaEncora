import { Page } from 'playwright';
import { FillField } from '../interactions/FillField';
import { ClickButton } from '../interactions/ClickButton';

export const Login = (username: string, password: string) => async (page: Page) => {
  await FillField('input[name="username"]', username)(page);
  await FillField('input[name="password"]', password)(page);
  await ClickButton('input[value="Log In"]')(page);
}; 