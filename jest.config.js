module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupTestFrameworkScriptFile: "<rootDir>/config/setupEnzyme.ts",
};