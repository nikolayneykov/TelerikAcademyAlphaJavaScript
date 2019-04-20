const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '5']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let width = +gets()
let height = +gets()
let area = width * height
print(area)
