const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '7125', '2846', '5842', '7719']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

let result = Array.from({ length: n }, () => {
  let digits = gets()
    .split('')
    .map(Number)

  let [evenSum, oddSum] = [
    digits.filter(x => x % 2 === 0).reduce((acc, num) => acc + num, 0),
    digits.filter(x => x % 2 === 1).reduce((acc, num) => acc + num, 0)
  ]

  return evenSum > oddSum ? 'left' : evenSum < oddSum ? 'right' : 'straight'
}).join('\n')

print(result)
