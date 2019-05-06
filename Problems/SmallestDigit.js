const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1234']

const gets = this.gets || getGets(test)
const print = this.print || console.log

print(
  Math.min(
    ...gets()
      .split('')
      .map(Number)
      .filter(x => x !== 0)
  )
)
