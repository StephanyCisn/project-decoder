// Write your tests here!


const expect = require("chai").expect;
const inputChecker = require("../src/substitution");

describe("inputChecker", () => {
    
    it("Should return false if input was not provided", () => {
        const expected = false;
        const actual = inputChecker("message");
        expect(actual).to.equal(expected);
      });

    it("Should return false if alphabet was not provided", () => {
        const expected = false;
        const actual = inputChecker("message");
        expect(actual).to.equal(expected);
      });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
      const expected = false;
      const actual = inputChecker("message", "plmoknijbuhvygctfxrdzeswaqaaaaa");
      expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false;
        const actual = inputChecker("message", "plmoknij");
        expect(actual).to.equal(expected);
    });

    it("should return false if duplicate values found in the given alphabet", () => {
        const expected = false;
        const actual = inputChecker("message", "abcdefghijklmnopqrstuvwxyy");
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces in the message", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = inputChecker("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("Decoding", () => {
        const expected = "message";
        const actual = inputChecker("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });

});