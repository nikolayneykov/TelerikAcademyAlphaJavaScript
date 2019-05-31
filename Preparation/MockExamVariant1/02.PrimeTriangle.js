const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10']

const gets = this.gets || getGets(test)
const print = this.print || console.log

function isPrime (n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

let sequence = Array.from({ length: +gets() }, (_, i) =>
  isPrime(i + 1) ? 1 : 0
)

let rows = sequence.filter(x => x === 1).length
let index = 0

for (let i = 0; i <= rows; i++) {
  print(sequence.slice(0, index + 1).join(''))
  index = sequence.indexOf(1, index + 1)
}
