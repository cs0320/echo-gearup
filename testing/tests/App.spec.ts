import { test, expect } from '@playwright/test';

// If you needed to do something before every test case...
test.beforeEach(() => {
    // ... you'd put it here.
  })

// Don't worry about the "async" yet. We'll cover it in more detail
// for the next sprint. For now, just think about "await" as something
// you put before parts of your test that might take time to run, 
// like any interaction with the page.
test('on page load, i see a button', async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await page.goto('http://localhost:3000');
  await expect(page.getByRole('button')).toBeVisible()
});

test('after I click the button, its label increments', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByRole('button').click()
    const name1 = `Run! (1 clicks so far)`
    await expect(page.getByRole('button')).toHaveText(name1)
});
  
// Of course, if we had multiple buttons, we'd need to be more specific
test('after I click the button with label 0, its counter increments', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // We can use the ARIA accessible name, instead of label:
    const name0 = `Click to run: 0`
    const name1 = `Click to run: 1`
    await page.getByRole('button', {name: name0}).click()
    await expect(page.getByRole('button', {name: name1})).toBeVisible()
    await expect(page.getByRole('button', {name: name0})).not.toBeVisible()
});
