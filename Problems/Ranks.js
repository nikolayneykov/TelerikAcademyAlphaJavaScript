const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '1 7 3 9']

const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()
let result = []

let arr = gets()
  .split(' ')
  .map(Number)

arr
  .slice()
  .sort((a, b) => b - a)
  .forEach((e, i) => {
    let index = arr.indexOf(e)
    result[index] = i + 1
  })

print(result.join(' '))
