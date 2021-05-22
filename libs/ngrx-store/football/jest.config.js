module.exports = {
    displayName: 'ngrx-store-football',
    preset: '../../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
            astTransformers: {
                before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
            },
        },
    },
    coverageDirectory: '../../../coverage/libs/ngrx-store/football',
    coverageReporters: ['html', 'lcov'],
    reporters: ['default'],
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
