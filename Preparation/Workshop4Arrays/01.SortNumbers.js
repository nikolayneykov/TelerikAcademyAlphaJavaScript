const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2, 3, 1, 5, 6']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let result = gets()
  .split(', ')
  .map(Number)
  .sort((a, b) => b - a)
  .join(', ')

print(result)
