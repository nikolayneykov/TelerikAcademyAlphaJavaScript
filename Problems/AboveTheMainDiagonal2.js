const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

let result = Array.from({ length: n }, (v, i) =>
  Array.from({ length: n }, (v2, i2) => 2 ** (i + i2))
).reduce((acc, n, row, arr) => {
  for (let col = 0; col <= row; col++) {
    acc += arr[row][col]
  }
  return acc
}, 0)

print(result)
