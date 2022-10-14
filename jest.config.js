/* eslint-disable no-undef */
module.exports = {
    collectCoverage: true,
    moduleFileExtensions: ["js", "ts", "tsx"],
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}