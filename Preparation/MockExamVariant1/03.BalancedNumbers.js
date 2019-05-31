const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['275', '693', '110', '742']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let sum = 0

for (
  let n = gets();
  n.length === 3 && +n[1] === +n[0] + +n[2];
  n = gets()
) {
  sum += +n
}

print(sum)
