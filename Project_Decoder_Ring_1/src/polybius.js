// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const numbers= [
     
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const letters = [
     
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    console.log(numbers.length);
    console.log(letters.length);

    if (encode) {
      
      let result = ""; 
      let message = input.toLowerCase();
      for (let text = 0; text < message.length; text++) {
        
        let letter = message[text];
        console.log(`letter is ${letter}`);
        if (letter.match(/[a-z]/)) {
          
          if (letter === "i" || letter === "j") {
            result += "42"; //return 42 for instances of i and j
          } else {
            let num = leters.indexOf(letter); 
            result += numbers[num];
          }
        } else {
          result += letter; 
        }
      }
      return result; 
    } else {
     
      let messageArr = input.split(" "); 
      console.log(messageArr);
      let lettersArr = [];
      for (word of messageArr) {
        lettersArr.push(word.match(/.{2}/g)); 
      }
      let isEven = messageArr.every((word) => word.length % 2 === 0); 

      if (!isEven) {
 
        return false;
      }
      let finalArr = []; 
      for (word of lettersArr) {
       
        let tempArr = [];
        for (letter of word) {
          if (letter === "42") {
            tempArr.push("(i/j)"); //use i/j for 42
          } else {
            let num = numbers.indexOf(letter);
            let something = letters[num];
            tempArr.push(something); 
          }
        }
        finalArr.push(tempArr);
      }
      
      let decodedArr = [];
      for (word of finalArr) {
        let val = word.join(""); 
        decodedArr.push(val);
      }
      console.log(decodedArr);
      let final = decodedArr.join(" "); 
      return final;
    }

   
  }

  polybius("jiggle", true);

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;