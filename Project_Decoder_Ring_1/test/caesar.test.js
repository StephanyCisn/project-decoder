// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
/**
 * 
 */
 // Write your tests here!
 
const caesarShift = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarShift", () => {

    it("should return false if shift equal to 0", () => {
      const expected = false;
      const actual = caesarShift("random text", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is not defined", () => {
        const expected = false;
        const actual = caesarShift("random text");
        expect(actual).to.equal(expected);
      });

    it("should return false if shift value is less than -25", () => {
        const expected = false;
        const actual = caesarShift("random text", -26);
    expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater than 25", () => {
        const expected = false;
        const actual = caesarShift("random text",26);
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces and special symbols", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesarShift("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("Decoding: should maintain spaces and special symbols", () => {
        const expected = "this is a secret message!";
        const actual = caesarShift("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("Should treat capital letters as lower case letters", () => {
    const upperCase = caesarShift("Hello WORLD", 0);
    const lowerCase = caesarShift("hello world", 0);
    expect(upperCase).to.equal(lowerCase);
    });
    
});