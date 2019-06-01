const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3621']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [even, odd] = [...gets()].map(Number).reduce(
  (acc, el) => {
    el % 2 === 0 ? (acc[0] += el) : (acc[1] += el)
    return acc
  },
  [0, 0]
)

print(
  even > odd
    ? `${even} energy drinks`
    : even < odd
      ? `${odd} cups of coffee`
      : `${even} of both`
)
