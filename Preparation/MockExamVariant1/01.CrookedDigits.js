const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1020340567.89']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let result = gets()
  .split('')
  .filter(x => x.match(/\d/))
  .map(Number)
  .reduce((acc, el) => {
    acc += el
    return acc < 9 ? acc : (acc % 10) + ~~(acc / 10)
  }, 0)

print(result)
