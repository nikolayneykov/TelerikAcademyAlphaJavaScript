const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['0 15 30']

const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()
  .split(' ')
  .map(x => Math.round(+x * 1.8 + 32))
  .forEach(x => print(x))
