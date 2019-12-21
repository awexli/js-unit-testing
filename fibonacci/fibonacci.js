const fibonacci = function(num) {
  let result = 0;
  let arr = [];

  if (num < 0) {
    return 'OOPS';
  }

  for (let i = 0; i <= num; i++) {
    if (i < 2) {
      result += i;
      arr[i] = result;
    } else {
      result = arr[i-1] + arr[i-2];
      arr[i] = result;
    }
  }
  return result;
}

module.exports = fibonacci
