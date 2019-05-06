const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['185']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let digits = gets().split('')

let num1 = +digits[0]
let num2 = +digits[1]
let num3 = +digits[2]

let biggestResult = Math.max(
  num1 + num2 + num3,
  num1 * num2 * num3,
  num1 * num2 + num3,
  num1 + num2 * num3
)

print(biggestResult)
