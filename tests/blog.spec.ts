import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('Find the lenght of the posts number', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/blog/');

    // verify number of posts
    await expect(page.locator('#recent-posts-3 ul').getByRole('listitem')).toHaveCount(5)
  })

  test('Check if every post has min length 10', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/blog/');
    const posts = await page.locator('#recent-posts-3 ul').getByRole('listitem');
    
    for (let i = 0; i < await posts.count(); i++) {
      const postText = await posts.nth(i).innerText();
      expect(postText.length).toBeGreaterThanOrEqual(10);
    }
  })
  
})
