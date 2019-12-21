const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
}

const shiftChar = (char, shift) => {
  let code = char.charCodeAt();
  if(code >= 97 && code <= 122 || code >= 65 && code <= 90) {
    let cypher = mod(code + shift - getAsciiSet(code), 26) + getAsciiSet(code);
    return String.fromCharCode(cypher);
  }
  return char;
}

const mod = (n, m) => (n % m + m) % m;

const getAsciiSet = charCode => {
  return charCode < 97 ? 65 : 97;
}

module.exports = caesar