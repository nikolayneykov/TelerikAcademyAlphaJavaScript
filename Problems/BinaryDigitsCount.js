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
const test = ['0', '4', '20', '1337', '2147483648', '4000000000']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const digit = gets()
const n = +gets()

for (let i = 0; i < n; i++) {
  let number = +gets()
  let digitsCount = number
    .toString(2)
    .split('')
    .filter(d => d === digit).length

  print(digitsCount)
}
