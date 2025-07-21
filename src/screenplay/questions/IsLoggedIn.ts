import { Page } from 'playwright';

export const IsLoggedIn = async (page: Page): Promise<boolean> => {
  return await page.isVisible('text=Account Services');
}; 