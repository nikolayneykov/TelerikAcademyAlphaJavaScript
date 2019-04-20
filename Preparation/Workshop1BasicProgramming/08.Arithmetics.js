const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let a = +gets()
let b = +gets()

print(a + b)
print(Math.abs(a - b))
print(a * b)
print(a % b)
print(Math.pow(a, b))
