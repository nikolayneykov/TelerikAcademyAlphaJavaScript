const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['123456 4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let input = gets().split(' ')
let [n, k] = [
  +input[0]
    .split('')
    .reverse()
    .join(''),
  +input[1]
]

let password = Math.floor(n / k) + (n % k)
print(password)
