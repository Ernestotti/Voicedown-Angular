module.exports = {
  preset: 'jest-preset-angular',
  testMatch: [
    "./__integration__/**/*.+(ts|tsx|js)",
    "**/integration/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  setupFilesAfterEnv: [
      './jest.setup.ts'
  ]
};