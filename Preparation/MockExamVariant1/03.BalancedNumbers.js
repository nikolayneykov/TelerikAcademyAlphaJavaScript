const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['275', '693', '110', '742']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let isBalanced = str =>
  str.length === 3 && Number(str[1]) === Number(str[0]) + Number(str[2])

let sum = 0
let num = gets()

while (isBalanced(num)) {
  sum += Number(num)
  num = gets()
}

print(sum)
