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
const test = ['5']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const n = +gets()
let i = 0

function printRoad (i, n) {
  if (i === n - 1) {
    print(`${'.'.repeat(i)}*${'.'.repeat(n - i - 1)}`)
    return
  }
  print(`${'.'.repeat(i)}*${'.'.repeat(n - i - 1)}`)
  printRoad(i + 1, n)
  print(`${'.'.repeat(i)}*${'.'.repeat(n - i - 1)}`)
}

printRoad(i, n)
