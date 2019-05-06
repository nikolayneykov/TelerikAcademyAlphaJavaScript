const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['5']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let sign = gets()
let n = faces.indexOf(sign)

for (let i = 0; i <= n; i++) {
  let face = faces[i]
  print(
    `${face} of spades, ${face} of clubs, ${face} of hearts, ${face} of diamonds`
  )
}
