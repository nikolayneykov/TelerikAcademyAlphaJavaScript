const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1020340567.89']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let number = gets()
  .split('')
  .filter(x => x.match(/\d/))
  .join('')

while (number.length > 1) {
  number = number
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0)
    .toString()
}

print(number)
