const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let meters = +gets() * 1609
print(meters)
