//(Q1).Do the below programs in anonymous function

//(a).Print odd numbers in an array anonymous function


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    if (number % 2 !== 0) {
       console.log(number);
    }
}


//(a).Print odd numbers in an array in (IIFE function)

(function() {
    const number =[1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            console.log(number);
        }
    }
})();



//(b).Convert all the strings to title caps in a string array anonymous function


const stringArray = ["tittle", "caps", "zyn rio"];

const titleCapsArray = stringArray.map(function(str) {
  return str
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
});

console.log(titleCapsArray);


//(b).Convert all the strings to title caps in a string array (IIFE) function

const stringArray = ["tittle", "caps", "zyn rio"];

const titleCapsArray = (function(arr) {
  return arr.map(function(str) {
    return str
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  })(stringArray);
})();

console.log(titleCapsArray);

//(c)Sum of all numbers in an array anonymous function

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // This will output 15, which is the sum of all numbers in the array.

//(c)Sum of all numbers in an array IIFE function 

const numbers = [1, 2, 3, 4, 5];

const sum = (function () {
  return numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
})();

console.log(sum); // This will also output 15, which is the sum of all numbers in the array.




//(d)Return all the prime numbers in an array anonymous function

function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}


//IIFE 
 (  
 function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
})([1,2,3,4])



//(e)Return all the palindromes in an array anonymous function

const strings = ["hi how are you", "task", "dificult"];

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

const palindromeStrings = [];

for (const string of strings) {
  if (isPalindrome(string)) {
    palindromeStrings.push(string);
  }
}

console.log(palindromeStrings);

//(e)Return all the palindromes in an array IIFE function

const strings = ["hi how are you", "task", "dificult"];

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

const palindromeStrings = [];

for (const string of strings) {
  if ((function () {
    // Use an IIFE to check for palindromes with spaces removed and case-insensitive
    const cleanedString = string.replace.toLowerCase();
    return isPalindrome(cleanedString);
  })()) {
    palindromeStrings.push(string);
  }
}

console.log(palindromeStrings);


//(f)Return median of two sorted arrays of same size
//(g).Remove duplicates from an Array



Anonymous Function : function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                      }




IIFE :                (function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4])




//(h)Rotate an array by k times Anonymous Function


const rotateArrayKTimes = (arr, k) => {
    for (let i = 0; i < k; i++) {
      const lastElement = arr.pop();
      arr.unshift(lastElement);
    }
    return arr;
  };
  
  const myArray = [1, 2, 3, 4, 5];
  const rotations = 2;
  
  const rotatedArray = rotateArrayKTimes(myArray, rotations);
  console.log(rotatedArray);


 // IIFE Function

 const myArray = [1, 2, 3, 4, 5];
const rotations = 2;

const rotatedArray = (function (arr, k) {
  for (let i = 0; i < k; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  return arr;
})(myArray.slice(), rotations);

console.log(rotatedArray);
