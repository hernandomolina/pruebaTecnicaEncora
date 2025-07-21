import { Page } from 'playwright';

export const FillField = (selector: string, value: string) => async (page: Page) => {
  await page.fill(selector, value);
}; 