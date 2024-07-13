module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx?)$': ['ts-jest',
            {
                babel: true,
                tsconfig: './tsconfig.app.json'
            }
        ]
    },
    moduleNameMapper: {
        '^common/(.*)$': '<rootDir>/src/common/$1'
    },
    setupFilesAfterEnv: ['./src/setupTests.ts']
}