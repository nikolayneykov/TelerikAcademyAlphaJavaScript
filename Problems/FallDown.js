const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['0', '64', '8', '8', '0', '12', '224', '0']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = Array.from({ length: 8 }, () => +gets())

for (let i = 0; i <= 7; i++) {
  for (let j = 7; j > 0; j--) {
    for (let k = 0; k <= 7; k++) {
      if (((n[j] >> k) & 1) === 0 && ((n[j - 1] >> k) & 1) === 1) {
        n[j] = n[j] | (1 << k)
        n[j - 1] = n[j - 1] ^ (1 << k)
      }
    }
  }
}

print(n.join('\n'))
