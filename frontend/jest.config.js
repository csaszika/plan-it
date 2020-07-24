module.exports = {
  preset: "jest-preset-angular",
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ],
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  setupFilesAfterEnv: [
    "./src/setupJest.ts",
    "./node_modules/jest-given-when-then/dist/jest-given-when-then.js"
  ],
  collectCoverageFrom: [
    "./src/**/*.ts",
    "!e2e/**",
  ],
  coveragePathIgnorePatterns:[
    ".*(spec|mock|stub|testdata|animations|model).ts"
  ],
  coverageReporters: ["html", "lcovonly"],
  testRegex: ".*spec.ts",
  moduleFileExtensions: ["ts", "js", "json", "html"],
  transformIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/scripts/",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/scripts/",
    "/src/environments/",
  ],
  modulePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/scripts/",
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js'
  ],
}
