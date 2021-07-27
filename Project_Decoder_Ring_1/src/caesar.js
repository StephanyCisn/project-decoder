// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesarShift(input, shift = 0, encode = true) { 
    if (shift == 0 || shift > 25 || shift < -25) return false; 
    input = input.toLowerCase();
    const encodedMessage = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    const searchArray = [...alphabet,...alphabet,...alphabet];
    shift = (encode == true) ? shift : shift*(-1); 

    for(letter of input){ 
      const letterPosition = alphabet.indexOf(letter);
      if (!alphabet.includes(letter)){
        encodedMessage.push(letter);
      } else {
        encodedMessage.push(searchArray[letterPosition + 26 + shift]);
      }
    }
    return encodedMessage.join("");
  }
  return {
    caesarShift,
  };
})();

module.exports = caesarModule.caesarShift;