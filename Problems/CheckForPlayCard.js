const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['Q']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let validCards = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A'
]

const str = gets()

print(`${validCards.includes(str) ? 'yes' : 'no'} ${str}`)
