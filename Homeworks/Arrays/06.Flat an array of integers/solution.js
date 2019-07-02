const arr = [1, 2, [3, 4, [5, 6]]]

function flat (arr) {
  return arr.reduce((acc, val) => Array.isArray(val)
    ? acc.concat(flat(val))
    : acc.concat(val), [])
}

console.log(flat(arr))
