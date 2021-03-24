module.exports = {
    projects: [
        '<rootDir>/apps/plan-it',
        '<rootDir>/libs/types/ui-routes',
        '<rootDir>/libs/types/common',
        '<rootDir>/libs/types/plan-configuration',
        '<rootDir>/libs/environments',
        '<rootDir>/libs/animations',
        '<rootDir>/libs/test-util',
        '<rootDir>/libs/plan-configuration-api',
        '<rootDir>/libs/training-plans-api',
        '<rootDir>/libs/ui-components/navigation-cards',
        '<rootDir>/libs/ngrx-core/configuration',
        '<rootDir>/libs/ngrx-actions/football-plan-configuration',
        '<rootDir>/libs/ngrx-store/football-plan-configuration',
        '<rootDir>/libs/ngrx-store/states',
        '<rootDir>/libs/ngrx-store/football',
        '<rootDir>/libs/features/dashboard',
        '<rootDir>/libs/features/creatable-plan-list',
        '<rootDir>/libs/features/plans-list',
        '<rootDir>/libs/features/football-plans',
        '<rootDir>/libs/types/training-plan',
    ],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    collectCoverageFrom: ['./apps/**/*.ts', './libs/**/*.ts', './apps/**e2e/**'],
    coveragePathIgnorePatterns: ['.*(spec|mock|stub|testdata|animations|model).ts'],
    coverageReporters: ['html', 'lcovonly'],
    testRegex: '.*spec.ts',
    moduleFileExtensions: ['ts', 'js', 'json', 'html'],
    transformIgnorePatterns: ['/node_modules/', '/dist/', '/scripts/'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/scripts/', '/src/environments/'],
    modulePathIgnorePatterns: ['/node_modules/', '/dist/', '/scripts/'],
};