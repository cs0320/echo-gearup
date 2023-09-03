import { test, expect } from '@playwright/test';


/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// If you needed to do something before every test case...
test.beforeEach(() => {
    // ... you'd put it here.
    // TODO: Is there something we need to do before every test case to avoid repeating code?
  })

/**
 * Don't worry about the "async" yet. We'll cover it in more detail
 * for the next sprint. For now, just think about "await" as something 
 * you put before parts of your test that might take time to run, 
 * like any interaction with the page.
 */
test('on page load, i see an input bar', async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  await page.goto('http://localhost:3000');
  await expect(page.getByLabel('Command input')).toBeVisible()
})

test('after I type into the input box, its text changes', async ({ page }) => {
    // Step 1: Navigate to a URL
    await page.goto('http://localhost:3000');

    // Step 2: Interact with the page
    // Locate the element you are looking for
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('Awesome command');

    // Step 3: Assert something about the page
    // Assertions are done by using the expect() function
    const mock_input = `Awesome command`
    await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('on page load, i see a button', async ({ page }) => {
  const name0 = `Click to run: 0`

  await page.goto('http://localhost:3000');
  await expect(page.getByRole('button', {name: name0})).toBeVisible()
});

test('after I click the button with label 0, its counter increments', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // We can use the ARIA accessible name, instead of label:
  const name0 = `Click to run: 0`
  const name1 = `Click to run: 1`
  await expect(page.getByRole('button', {name: name0})).toBeVisible()
  await page.getByRole('button', {name: name0}).click()
  await expect(page.getByRole('button', {name: name1})).toBeVisible()
  await expect(page.getByRole('button', {name: name0})).not.toBeVisible()
});

/* Now we are going to add some end to end testing with our trivial backend */
/* TODO: Test the button you just added! */

test('clicking the Fetch and Run buttons increment the counter by 17+1 respectively', async ({ page }) => {
  const no_increment = `Click to run: 0`
  const increment_17 = `Click to run: 17`
  const increment_18 = `Click to run: 18`  
  
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('button', {name: no_increment})).toBeVisible()

  // Make a trivial (backend) fetch request
  await page.getByRole('button', { name: 'Fetch for fun times!' }).click();
  await expect(page.getByRole('button', {name: no_increment})).not.toBeVisible()
  await expect(page.getByRole('button', {name: increment_17})).toBeVisible()

  // Make a normal increment with the Run! button
  await page.getByLabel('Click to run: 17').click();
  await expect(page.getByRole('button', {name: no_increment})).not.toBeVisible()
  await expect(page.getByRole('button', {name: increment_17})).not.toBeVisible()
  await expect(page.getByRole('button', {name: increment_18})).toBeVisible()
});