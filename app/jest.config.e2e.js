module.exports = {
  preset: 'jest-preset-angular',
  testMatch: [
    "./__e2e__/**/*.+(ts|tsx|js)",
    "**/e2e/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  setupFilesAfterEnv: [
      './jest.setup.ts'
  ]
};