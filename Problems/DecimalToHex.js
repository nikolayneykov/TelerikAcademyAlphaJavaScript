const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['338583669684']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let decimal = +gets()
print(decimal.toString(16).toUpperCase())
