// global-setup.js

const { chromium } = require('@playwright/test');
const { login } = require('./utils/login');
const fs = require('fs');
const path = require('path');

const STORAGE_STATE = path.resolve(__dirname, '.state/admin-auth.json');

module.exports = async () => {
  // Launch a Chromium browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Perform login using login.js
  await login(page);

  // Save storage state for reuse in tests
  await page.context().storageState({ path: STORAGE_STATE });

  await browser.close();
};
