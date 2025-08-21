import { expect, test } from "./test.ts";

/**
 * taken from: https://markus.oberlehner.net/blog/running-visual-regression-tests-with-storybook-and-playwright-for-free
 */
// This file is created by Storybook
// when we run `npm run build`
import storybook from "../dist/index.json" with { type: "json" };

// Only run tests on stories, not other documentation pages.
const stories = Object.values(storybook.entries).filter(
  (e) => e.type === "story",
);

for (const story of stories) {
  test(`${story.title} ${story.name} should not have visual regressions`, async ({
    page,
  }, workerInfo) => {
    const params = new URLSearchParams({
      id: story.id,
      viewMode: "story",
    });

    await page.goto(`/iframe.html?${params.toString()}`);
    await page.waitForSelector("#storybook-root");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot(
      `${story.id}-${workerInfo.project.name}.png`,
      {
        fullPage: true,
        animations: "disabled",
      },
    );
  });
}
