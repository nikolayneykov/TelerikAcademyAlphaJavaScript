const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['hoboobbo422222Aaao']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let result = gets()
  .split('')
  .reduce((acc, e) => {
    if (acc[acc.length - 1] !== e) {
      acc.push(e)
    }

    return acc
  }, [])
  .join('')

print(result)
