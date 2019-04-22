const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3,-12,0,0,13,5,1,0,-2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(',')
  .map(Number)

let avg = arr.reduce((acc, e) => acc + e, 0) / arr.length
let below = arr.filter(x => x < avg).join(',')
let above = arr.filter(x => x > avg).join(',')

print(`avg: ${avg.toFixed(2)}`)
print(`below: ${below}`)
print(`above: ${above}`)
