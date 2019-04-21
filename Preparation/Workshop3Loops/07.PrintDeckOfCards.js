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

const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let cardInput = gets()
let cardIndex = deck.indexOf(cardInput)

deck.forEach((card, index) => {
  if (index <= cardIndex) {
    print(
      `${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds`
    )
  }
})
