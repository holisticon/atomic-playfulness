import { test as base, type Page } from "@playwright/test";

export { expect } from "@playwright/test";

interface WorkerFixture {
  workerPage: Page;
}

export const test = base.extend<object, WorkerFixture>({
  workerPage: [
    async ({ browser }, use) => {
      const page = await browser.newPage();
      return await use(page);
    },
    { scope: "worker" },
  ],
  page: ({ workerPage }, use) => use(workerPage),
});
