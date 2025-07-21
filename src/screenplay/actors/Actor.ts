import { Page } from 'playwright';

export class Actor {
  constructor(public name: string, public page: Page) {}

  async attemptsTo(...tasks: Array<(page: Page) => Promise<void>>) {
    for (const task of tasks) {
      await task(this.page);
    }
  }
} 