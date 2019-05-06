const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['AF4171QA']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let input = gets().split('')
let digitProduct = input
  .slice(2, input.length - 2)
  .map(Number)
  .reduce((acc, n) => acc * n, 1)

let asciiSum = Math.floor(
  input
    .slice(0, 2)
    .concat(input.slice(-2))
    .map(x => x.charCodeAt(0))
    .reduce((acc, n) => acc + n, 0) / 10
)

print(digitProduct === asciiSum ? `Yes ${digitProduct}` : 'No')
