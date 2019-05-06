const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '12', '23', '34', '45']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let input = Array.from({ length: n }, () => gets())

let merged = Array.from(
  { length: n - 1 },
  (v, i) => input[i][1] + input[i + 1][0]
).join(' ')

let squashed = Array.from(
  { length: n - 1 },
  (v, i) =>
    input[i][0] +
    ((Number(input[i][1]) + Number(input[i + 1][0])) % 10) +
    input[i + 1][1]
).join(' ')

print(`${merged}\n${squashed}`)
