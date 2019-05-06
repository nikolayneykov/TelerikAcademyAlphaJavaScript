const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10', '2', '3', '-6', '-1', '2', '-1', '6', '4', '-8', '8']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = []
let n = +gets()

while (n >= 0) {
  arr.push(+gets())
  n--
}

let bestSum = Number.MIN_SAFE_INTEGER
let currentSum = 0
let startIndex = 0
let currentIndex = 0

while (startIndex < arr.length) {
  currentSum += arr[currentIndex]

  if (bestSum < currentSum) {
    bestSum = currentSum
  }

  currentIndex++
  if (currentIndex === arr.length) {
    startIndex++
    currentIndex = startIndex
    currentSum = 0
  }
}

print(bestSum)
