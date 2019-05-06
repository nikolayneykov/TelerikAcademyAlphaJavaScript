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
const test = ['1 2 3 1 3']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let [a, b, c, d, h] = gets()
  .split(' ')
  .map(Number)

let bestCircumference =
  a +
  b +
  c +
  d * 2 +
  h * 2 +
  Math.abs(Math.max(a, b, c) - Math.max(d, h)) -
  (Math.max(a, b, c) + Math.max(d, h))

print(bestCircumference)
