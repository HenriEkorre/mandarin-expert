import { divide } from "../src/calculator.js";

describe("divide", () => {
	test("divides two numbers", () => {
		expect(divide(10, 2)).toBe(5);
	});

	test("rejects a non-number dividend", () => {
		expect(() => divide("10", 2)).toThrow(
			new TypeError("Both arguments must be numbers"),
		);
	});

	test("rejects a non-number divisor", () => {
		expect(() => divide(10, "2")).toThrow(
			new TypeError("Both arguments must be numbers"),
		);
	});

	test("rejects NaN as the dividend", () => {
		expect(() => divide(Number.NaN, 2)).toThrow(
			new TypeError("Arguments cannot be NaN"),
		);
	});

	test("rejects NaN as the divisor", () => {
		expect(() => divide(10, Number.NaN)).toThrow(
			new TypeError("Arguments cannot be NaN"),
		);
	});

	test("rejects division by zero", () => {
		expect(() => divide(10, 0)).toThrow(
			new RangeError("Division by zero is not allowed"),
		);
	});
});