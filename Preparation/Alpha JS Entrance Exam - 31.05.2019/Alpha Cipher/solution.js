const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['111', '222', '333', '444', '555']

const gets = this.gets || getGets(test)
const print = this.print || console.log

print(
  Array.from(
    { length: 5 },
    () => [...gets()].reduce((acc, el) => acc * el, 1) % 10
  ).join('')
)
