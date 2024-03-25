function longestCommonPrefix(stringList) {
  if (stringList.length === 1) return stringList[0];

  stringList.sort(); //*sort to cut the process by only compare the furthest word
  for (let i = 0; i < stringList[0].length; i++) {
    if (stringList[0][i] !== stringList[stringList.length - 1][i]) {
      return stringList[0].substr(0, i);
    }
  }

  return stringList[0]; //* for all empty string in stringList case
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
