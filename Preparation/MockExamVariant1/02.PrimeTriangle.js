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

function isPrime (num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

let n = +gets()
let sequence = []
sequence.length = n
sequence = sequence.fill(0).map((e, i) => (isPrime(i + 1) ? 1 : 0))
let rowCount = sequence.filter(x => x === 1).length
let index = 0

for (let i = 0; i < rowCount; i++) {
  while (index < sequence.length && sequence[index] === 0) {
    index++
  }

  index++
  print(sequence.slice(0, index).join(''))
}
