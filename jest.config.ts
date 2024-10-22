import { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  preset: "ts-jest",
  modulePathIgnorePatterns: ["<rootDir>/__tests__/e2e/"],
  roots: ["<rootDir>"],
  moduleDirectories: ["node_modules", "<rootDir>", __dirname ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|less)$': 'identity-object-proxy',
  }
 }

export default jestConfig;
