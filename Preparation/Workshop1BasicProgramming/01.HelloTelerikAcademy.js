const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = []

const gets = this.gets || getGets(test)
const print = this.print || console.log

let message = 'Hello, Telerik Academy!'
print(message)
