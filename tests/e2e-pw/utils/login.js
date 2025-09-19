// utils/login.js

export async function login(page) {
  // Go to admin login page and wait for network idle
  await page.goto('http://127.0.0.1:8000/admin/login', { waitUntil: 'networkidle' });

  // Wait for the login form wrapper to appear first
  await page.locator('form').first().waitFor({ state: 'visible', timeout: 120000 });

  // Wait for email input to be visible, then fill
  const emailInput = page.getByRole('textbox', { name: 'Email Address' });
  await emailInput.waitFor({ state: 'visible', timeout: 120000 });
  await emailInput.fill('admin@example.com');

  // Wait for password input to be visible, then fill
  const passwordInput = page.getByRole('textbox', { name: 'Password' });
  await passwordInput.waitFor({ state: 'visible', timeout: 120000 });
  await passwordInput.fill('admin123');

  // Wait for sign-in button to be visible, then click
  const signInButton = page.getByRole('button', { name: 'Sign In' });
  await signInButton.waitFor({ state: 'visible', timeout: 120000 });
  await signInButton.click();

  // Wait for page load to complete
  await page.waitForLoadState('networkidle');
};
