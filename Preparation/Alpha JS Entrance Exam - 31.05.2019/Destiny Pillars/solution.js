const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['-5 5 1 8 -4 1 2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(' ')
  .map(Number)

let distances = []

for (let i = 0; i < arr.length - 1; i++) {
  distances[i] = Math.abs(arr[i] - arr[i + 1])

  if (distances[i] % 2 === 0) {
    distances[++i] = 0
  }
}

print(
  distances.filter(x => x % 2 === 0).reduce((acc, el) => acc + el, 0)
)
