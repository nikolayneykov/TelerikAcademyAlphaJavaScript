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
const test = ['4 10']
const gets = this.gets || getGets(test)
const print = this.print || console.log

function getGcd (a, b) {
  if (b === 0) {
    return a
  }

  return getGcd(b, a % b)
}

let [a, b] = gets()
  .split(' ')
  .map(Number)

let gcd = getGcd(a, b)

print(`${a / gcd} ${b / gcd}`)
