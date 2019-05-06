const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['9']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

for (let i = 0, pieces = 1024; i <= 10; i++, pieces /= 2) {
  if (n >= pieces) {
    n -= pieces
  } else {
    print(`A${i}`)
  }
}
