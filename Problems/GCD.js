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
const test = ['60 40']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let [first, second] = gets()
  .split(' ')
  .map(Number)

function getGcd (first, second) {
  if (second === 0) {
    return first
  }

  return getGcd(second, first % second)
}

let gcd = getGcd(first, second)

print(gcd)
