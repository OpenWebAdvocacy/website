import {expect, test} from '@playwright/test';

test('home page has title', async ({page}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', {name: 'Open Web Advocacy'})).toBeVisible();
});

test.describe('tag list page', () => {
  test('posts in #japan have #japan tag', async ({page}) => {
    await page.goto('/tag/japan/');

    const postLinks = page.locator('main').getByRole('link');
    const firstPost = await postLinks.first();
    const lastPost = await postLinks.last();

    for (const postLink of [firstPost, lastPost]) {
      await postLink.click();

      await expect(page.getByRole('list', {name: 'Tags'}).getByRole('link', {name: '#Japan'})).toBeVisible();

      await page.goBack();
    }
  });

  test('oldest post in #eu does not have #japan tag', async ({page}) => {
    await page.goto('/tag/eu/');

    const postLinks = page.locator('main').getByRole('link');

    // The oldest post in #eu should be the following post, and it has tags: #Policy #Updates #UK #EU
    // OWA updates on progress with UK and EU digital competition regulations - Open Web Advocacy
    // - https://open-web-advocacy.org/blog/CMA-DMA-Nov-22/
    const lastPostLink = postLinks.last();
    await expect(lastPostLink).toHaveAttribute('href', '/blog/CMA-DMA-Nov-22/');

    await lastPostLink.click();

    await expect(page.getByRole('list', {name: 'Tags'}).getByRole('link', {name: '#Japan'})).not.toBeVisible();
  });
});
