const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2', '1 3', '123 -3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

let result = Array.from({ length: n }, () =>
  gets()
    .split(' ')
    .map(Number)
    .reduce((acc, n) => acc + n, 0)
).join('\n')

print(result)
