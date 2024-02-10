import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    it("should correctly add two numbers", () => {
      expect(calculator.add(2, 3)).to.equal(5);
      expect(calculator.add(-1, 1)).to.equal(0);
      expect(calculator.add(-2, -2)).to.equal(-4);
    });
  });

  describe("subtract", () => {
    it("should correctly subtract two numbers", () => {
      expect(calculator.subtract(5, 3)).to.equal(2);
      expect(calculator.subtract(10, 5)).to.equal(5);
      expect(calculator.subtract(-1, -1)).to.equal(0);
    });
  });
});
