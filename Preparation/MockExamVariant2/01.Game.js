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

let [num1, num2, num3] = gets()
  .split('')
  .map(Number)

print(
  Math.max(
    num1 + num2 + num3,
    num1 * num2 * num3,
    num1 * num2 + num3,
    num1 + num2 * num3
  )
)
