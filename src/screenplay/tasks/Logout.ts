import { Page } from 'playwright';
import { ClickButton } from '../interactions/ClickButton';

export const Logout = () => async (page: Page) => {
  await ClickButton('text=Log Out')(page);
}; 