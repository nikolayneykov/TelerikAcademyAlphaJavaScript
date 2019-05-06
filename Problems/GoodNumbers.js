const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['42 142']

const gets = this.gets || getGets(test)
const print = this.print || console.log

function isGoodNumber (num) {
  let digits = num
    .toString()
    .split('')
    .map(Number)

  for (let digit of digits) {
    if (digit !== 0 && num % digit !== 0) {
      return false
    }
  }

  return true
}

let [a, b] = gets()
  .split(' ')
  .map(Number)

let goodNumbersCount = 0

for (let i = a; i <= b; i++) {
  if (isGoodNumber(i)) {
    goodNumbersCount++
  }
}

print(goodNumbersCount)
