import { describe, it, expect } from "vitest";
import { hello } from "./hello";

describe("hello", () => {
  it('should return "hello"', () => {
    expect(hello()).toBe("hello");
  });
});
