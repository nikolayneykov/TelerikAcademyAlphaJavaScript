const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['6', '-26 -25 -28 31 2 27']

const gets = this.gets || getGets(test)
const print = this.print || console.log
gets()
print(
  gets()
    .split(' ')
    .map(Number)
    .filter((e, i, arr) => e > arr[i - 1] && e > arr[i + 1]).length
)
