const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
// const test = ['1010101010101011']
const test = ['111']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const base = 2
let decimal = gets()
  .split('')
  .reverse()
  .reduce((acc, bit, pow) => (acc += bit * base ** pow), 0)

print(decimal)
