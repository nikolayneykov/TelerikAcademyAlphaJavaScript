const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1000']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let letters = []

for (let i = 65; i <= 90; i++) {
  letters.push(String.fromCharCode(i))
}

for (let i = 97; letters.length < 256 && i <= 122; i++) {
  for (let j = 65; letters.length < 256 && j <= 90; j++) {
    letters.push(String.fromCharCode(i) + String.fromCharCode(j))
  }
}

let result = []
let num = +gets()
let divisor = 256

do {
  result.unshift(letters[num % divisor])
  num /= divisor
} while (num > 0)

// Does not work with 64bit Integers!
print(result.join(''))
