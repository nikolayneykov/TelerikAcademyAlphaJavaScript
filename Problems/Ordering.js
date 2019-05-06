const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3 4 5 6']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(' ')
  .map(Number)

let isAscending = arr.every((v, i, arr) => v < arr[i + 1] || !arr[i + 1])
let isDescending = arr.every((v, i, arr) => v > arr[i + 1] || !arr[i + 1])

print(isAscending ? 'Ascending' : isDescending ? 'Descending' : 'Mixed')
