const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['15']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const n = +gets()

let primes = [0]
  .reduce((acc, e) => {
    for (let i = 1; i <= n; i++) {
      let isPrime = true
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false
          break
        }
      }

      if (isPrime) {
        acc.push(i)
      }
    }
    return acc
  }, [])
  .join(' ')

print(primes)
