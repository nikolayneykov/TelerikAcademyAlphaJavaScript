const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '5 0 1', '7 4 -3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()

let [arr1, arr2] = [
  gets()
    .split(' ')
    .map(Number),
  gets()
    .split(' ')
    .map(Number)
]

let result = arr1
  .reduce((acc, el, i) => {
    acc.push(el + arr2[i])
    return acc
  }, [])
  .join(' ')

print(result)
