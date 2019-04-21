const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['100']

const gets = this.gets || getGets(test)
const print = this.print || console.log

function isPrime (num) {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

let num = +gets()

for (let i = 2; i <= num; i++) {
  while (num % i === 0 && isPrime(i)) {
    print(i)
    num /= i
  }
}
