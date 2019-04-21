const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let humanYears = +gets()
let dogYears = 0

for (let year = 1; year <= humanYears; year++) {
  if (year <= 2) {
    dogYears += 10
  } else {
    dogYears += 4
  }
}

print(dogYears)
