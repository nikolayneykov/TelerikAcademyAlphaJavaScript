const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

function printTriangle (i) {
  if (i === n) {
    print(Array.from({ length: i }, (_, i) => i + 1).join(' '))
    return
  }

  print(Array.from({ length: i }, (_, i) => i + 1).join(' '))
  printTriangle(i + 1)
  print(Array.from({ length: i }, (_, i) => i + 1).join(' '))
}

printTriangle(1)
