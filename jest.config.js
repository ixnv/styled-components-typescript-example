module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupTestFrameworkScriptFile: '<rootDir>/config/setupEnzyme.ts',
    snapshotSerializers: ['enzyme-to-json/serializer'],
}