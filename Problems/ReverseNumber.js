const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['256']

const gets = this.gets || getGets(test)
const print = this.print || console.log

print(gets().split('').reverse().join(''))
