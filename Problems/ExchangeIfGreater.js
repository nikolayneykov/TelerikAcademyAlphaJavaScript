const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['5', '3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [a, b] = [+gets(), +gets()]
print(`${Math.min(a, b)} ${Math.max(a, b)}`)
