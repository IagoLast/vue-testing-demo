/* eslint-env node */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/*.spec.(js|ts|tsx)"],
};
