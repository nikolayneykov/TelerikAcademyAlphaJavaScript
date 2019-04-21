const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['6', '9', '11', '3', '2', '1', '8']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let numbers = []

let n = +gets()

for (let i = 0; i < n; i++) {
  let currentNumber = +gets()
  numbers.push(currentNumber)
}

let [first, second, third] = numbers.sort((a, b) => b - a)
print(`${first}, ${second} and ${third}`)
