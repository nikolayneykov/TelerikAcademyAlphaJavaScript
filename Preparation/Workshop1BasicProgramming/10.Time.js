const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '3', '11', '40']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let days = +gets()
let hours = +gets()
let minutes = +gets()
let seconds = +gets()

let totalSeconds =
  days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds
print(totalSeconds)
