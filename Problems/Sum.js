const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['7 1 59']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(' ')
  .map(Number)

print(Math.max(...arr) + Math.min(...arr))
