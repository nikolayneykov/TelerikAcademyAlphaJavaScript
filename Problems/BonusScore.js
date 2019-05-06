const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['8']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let result =
  n >= 1 && n <= 3
    ? n * 10
    : n >= 4 && n <= 6
      ? n * 100
      : n >= 7 && n <= 9
        ? n * 1000
        : 'invalid score'

print(result)
