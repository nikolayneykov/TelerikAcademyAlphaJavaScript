const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '5', '7', '3', '6']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let maxNumber = Number.MIN_SAFE_INTEGER

for (let i = 0; i < n; i++) {
  let currentNumber = +gets()

  if (currentNumber > maxNumber) {
    maxNumber = currentNumber
  }
}

print(maxNumber)
