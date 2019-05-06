const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['94 106 4 5']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [a, b, p1, p2] = gets()
  .split(' ')
  .map(Number)

let result = Array.from({ length: b + 1 - a }, (v, i) => i + a)
  .join('')
  .split('')
  .filter(x => x % p1 !== 0 && x % p2 !== 0).length

print(result)
