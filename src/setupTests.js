import { cleanup } from "@testing-library/react";
import { expect, afterEach } from "vitest";
import { server } from "./mocks/server";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

beforeAll(() => server.listen());

/**
 * Reset any request handlers that we may add during the tests,
 * so they don't affect other tests.
 */
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

/**
 * Clean up after the tests are finished.
 */
afterAll(() => server.close());
