const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['236476736']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let decimal = +gets()
let binary = []

do {
  binary.push(decimal % 2)
  decimal = ~~(decimal / 2)
} while (decimal > 0)

print(binary.reverse().join(''))
