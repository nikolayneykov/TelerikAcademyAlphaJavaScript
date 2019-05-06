const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['FE']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const decValues = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15
}
const base = 16

let decimal = gets()
  .split('')
  .reverse()
  .reduce((acc, digit, pow) => (acc += decValues[digit] * base ** pow), 0)

print(decimal)
