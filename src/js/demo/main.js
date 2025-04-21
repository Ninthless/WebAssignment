function uniqueArray(arr) {
  return Array.from(new Set(arr));
}

console.log(uniqueArray([1, 2, 3, 4, 5, 5, 5, 5, 5]));