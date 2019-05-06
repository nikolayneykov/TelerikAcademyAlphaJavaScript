const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2 8']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [n, m] = gets()
  .split(' ')
  .map(Number)

let sum = Array.from({ length: m + 1 - n }, (v, k) => k + n).reduce(
  (acc, num) => acc + num
)

print(sum)
