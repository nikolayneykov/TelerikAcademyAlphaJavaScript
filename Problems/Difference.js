const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3 5']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [num1, num2] = gets()
  .split(' ')
  .map(Number)

print(Math.abs(num1 - num2))
