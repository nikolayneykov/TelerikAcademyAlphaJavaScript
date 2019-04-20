const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1000']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let deposit = +gets()

for (let year = 1; year <= 3; year++) {
  deposit *= 1.05
  print(deposit.toFixed(2))
}
