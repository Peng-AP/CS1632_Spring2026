import { test, expect } from '@playwright/test';

test('TEST-1-TITLE', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  await expect(page).toHaveTitle('Home | University of Pittsburgh');
});

test('TEST-2-LOGO-EXISTS', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  // Two ways of doing the same assertion: A logo with the alt text "University of Pittsburgh" is present on the page.
  await expect(page.locator('//img[@alt="University of Pittsburgh"]')).toBeVisible();
  await expect(page.getByAltText('University of Pittsburgh', { exact: true })).toBeVisible();
});

test('TEST-3-LOGO-IMAGE', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  await expect(page.getByAltText('University of Pittsburgh', { exact: true })).toHaveAttribute('src', '/sites/default/files/assets/pitt_shield_white-home.png');
});

test('TEST-4-SCHOOLS-SCI', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  await page.getByRole('button', { name: 'Open Navigation' }).click();
  await expect(page.getByTestId('block-pitt-25-edu-collegesschools-2').getByRole('listitem').nth(2)).toHaveText('Computing & Information');
});

test('TEST-5-SCHOOLS-COUNT', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  await page.getByRole('button', { name: 'Open Navigation' }).click();
  await expect(page.getByTestId('block-pitt-25-edu-collegesschools-2').getByRole('listitem')).toHaveCount(16);
});

test('TEST-6-SEARCH-CSC', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  await page.getByLabel('Toggle search').click();
  await page.locator('#edit-keys').fill('computer science club');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Student Organization Spotlight: Computer Science Club (CSC)' })).toBeVisible();
});

test('TEST-7-ABOUT-SNAPSHOT', async ({ page }) => {
  await page.goto('https://www.pitt.edu/');
  await page.getByRole('link', { name: 'About' }).first().click();
  await expect(page).toHaveScreenshot();
});