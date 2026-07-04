import {expect, test} from '@playwright/test';

test('home page has title', async ({page}) => {
  await page.goto('/');
  await expect(page.getByRole('heading', {name: 'Open Web Advocacy'})).toBeVisible();
});

test.describe('tag list page', () => {
  test('posts in #japan have #japan tag', async ({page}) => {
    await page.goto('/tag/japan/');

    const postLinks = page.locator('main').getByRole('link');
    const firstPost = postLinks.first();
    const lastPost = postLinks.last();

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

test.describe('translations', () => {
  test('non-English page has translated text', async ({page}) => {
    await page.goto('/ja/');
    await expect(page.locator('.home-intro')).toContainText('開かれたウェブ');
    await expect(page.locator('.home-intro')).not.toContainText('the open web');
  });

  test('non-English tag page has translated tag', async ({page}) => {
    await page.goto('/ja/tag/japan');
    const header = page.getByRole('heading', { level: 1})
    await expect(header).toContainText('日本');
    await expect(header).not.toContainText('Japan');
  });

  test('translated news article has translated tag', async ({page}) => {
    await page.goto('/ja/blog/28-percent-faster--the-blink-prototype-that-shows-why-apples-ios-browser-engine-ban-must-end/');

    await expect(page.getByRole('list', {name: 'Tags'}).getByRole('link', {name: '#日本'})).toBeVisible();
    await expect(page.getByRole('list', {name: 'Tags'}).getByRole('link', {name: '#Japan'})).not.toBeVisible();
  });
});
