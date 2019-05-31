const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '12', '23', '34', '45']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [merged, squashed] = [[], []]

Array.from({ length: +gets() }, () => gets()).forEach((e, i, a) => {
  if (i < a.length - 1) {
    merged.push(a[i][1] + a[i + 1][0])
    squashed.push(
      a[i][0] + ((+a[i][1] + +a[i + 1][0]) % 10) + a[i + 1][1]
    )
  }
})

print(merged.join(' '))
print(squashed.join(' '))
