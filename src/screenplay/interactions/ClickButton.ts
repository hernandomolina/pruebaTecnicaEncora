import { Page } from 'playwright';

export const ClickButton = (selector: string) => async (page: Page) => {
  await page.click(selector);
}; 