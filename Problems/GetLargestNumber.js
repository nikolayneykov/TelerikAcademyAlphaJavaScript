const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
// const test = ['1010101010101011']
const test = ['8 3 6']
const gets = this.gets || getGets(test)
const print = this.print || console.log

print(Math.max(...gets().split(' ')))
