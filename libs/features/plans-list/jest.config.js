module.exports = {
    displayName: 'features-plans-list',
    preset: '../../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
        'ts-jest': {
            stringifyContentPathRegex: '\\.(html|svg)$',
            astTransformers: {
                before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
            },
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    collectCoverage: true,
    coverageDirectory: '../../../coverage/libs/features/plans-list',
    coverageReporters: ['html', 'lcov'],
    reporters: ['default'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
};
