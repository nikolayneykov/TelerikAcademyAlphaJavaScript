const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
// const test = ['1010101010101011']
const test = ['6', '-26 -25 -28 31 2 27']
const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()
let arr = gets()
  .split(' ')
  .map(Number)

let result = arr.indexOf(arr.find((n, i) => n > arr[i - 1] && n > arr[i + 1]))

print(result)
