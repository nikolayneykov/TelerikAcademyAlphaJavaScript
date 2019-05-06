const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2', '1 0 0 1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [s, arr] = [
  +gets(),
  gets()
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a)
]

let found = false
for (let i = 0; i < arr.length && !found; i++) {
  let sum = 0
  for (let j = i; j < arr.length; j++) {
    sum += arr[j]

    if (sum > s) {
      sum -= arr[j]
    }

    if (sum === s) {
      found = true
      break
    }
  }
}

print(found ? 'yes' : 'no')
