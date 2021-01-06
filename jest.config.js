module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    resetMocks: true,
    transform: {
        '\\.jsx?$': 'babel-jest',
    },
};
