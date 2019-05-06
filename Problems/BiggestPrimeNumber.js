const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['126']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

let n = +gets()

for (let i = n; i >= 0; i--) {
  if (isPrime(i)) {
    print(i)
    break
  }
}
