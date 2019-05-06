const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '2', '5', '1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

let arr = Array.from({ length: n }, () => +gets())

print(`min=${Math.min(...arr).toFixed(2)}`)
print(`max=${Math.max(...arr).toFixed(2)}`)
print(`sum=${arr.reduce((a, b) => a + b, 0).toFixed(2)}`)
print(`avg=${(arr.reduce((a, b) => a + b, 0) / n).toFixed(2)}`)
