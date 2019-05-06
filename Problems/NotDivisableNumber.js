const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

let notDivisibleNumbers = Array.from({ length: n }, (v, k) => k + 1)
  .filter(x => x % 3 !== 0 && x % 7 !== 0)
  .join(' ')

print(notDivisibleNumbers)
