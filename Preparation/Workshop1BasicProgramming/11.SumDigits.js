const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2346']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let sum = gets()
  .split('')
  .map(Number)
  .reduce((acc, num) => acc + num, 0)

print(sum)
