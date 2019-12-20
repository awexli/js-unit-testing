const palindromes = function(string) {
  let str = string.toLowerCase();
  str = str.replace(/[^\w\s]|_/g, "").replace(/\s/g, '');

  let newString = str.split("").reverse().join("")
  
  return newString === str ? true : false;
}

module.exports = palindromes
