//(Q.2)Do the below programs in arrow functions.



//(a)Print odd numbers in an array

const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };

  
//(b)Convert all the strings to title caps in a string array

const convertToTitleCaps = (strArray) => {
    return strArray.map((str) => {
      return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    });
  };

  
//(c)Sum of all numbers in an array

const sumOfNumbers = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };

  
//(d)Return all the prime numbers in an array

const isPrime = (num) => {
    if (num <=1) return false;
    if (num <=3) return true;
    if (num % 2 == 0 || num % 3 == 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num %i == 0 || num % (i + 2) == 0) return false;
      i += 6;
    }
    return true;
  };
  
  const getPrimeNumbers = (arr) => {
    return arr.filter((num) => isPrime(num));
  };
  


//(e)Return all the palindromes in an array


const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };
  
  const getPalindromes = (arr) => {
    return arr.filter((str) => isPalindrome(str));
  };
  

