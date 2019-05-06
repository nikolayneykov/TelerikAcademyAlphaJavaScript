const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['6', '44 5 234 7878 453 20']

const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()

function gcd (a, b) {
  if (b === 0) {
    return a
  }

  return gcd(b, a % b)
}

let count = 0
gets()
  .split(' ')
  .forEach(code => {
    let mutatedCode = +code
      .split('')
      .map(c => {
        c = +c
        if (c % 2 === 0) {
          c = c === 0 ? 9 : c - 1
        } else {
          c = c === 9 ? 0 : c + 1
        }

        return c
      })
      .join('')

    if (gcd(+code, mutatedCode).toString().length === 1) {
      count++
    }
  })

print(count)
