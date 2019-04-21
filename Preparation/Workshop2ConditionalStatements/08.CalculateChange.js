const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1', '5.80']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let price = +gets() * 100
let paid = +gets() * 100
let change = paid - price
let coinCount = 0

while (change > 0) {
  if (change >= 100) {
    coinCount = Math.floor(change / 100)
    change -= coinCount * 100
    print(`${coinCount} x 1 lev`)
  } else if (change >= 50) {
    coinCount = Math.floor(change / 50)
    change -= coinCount * 50
    print(`${coinCount} x 50 stotinki`)
  } else if (change >= 20) {
    coinCount = Math.floor(change / 20)
    change -= coinCount * 20
    print(`${coinCount} x 20 stotinki`)
  } else if (change >= 10) {
    coinCount = Math.floor(change / 10)
    change -= coinCount * 10
    print(`${coinCount} x 10 stotinki`)
  } else if (change >= 5) {
    coinCount = Math.floor(change / 5)
    change -= coinCount * 5
    print(`${coinCount} x 5 stotinki`)
  } else if (change >= 2) {
    coinCount = Math.floor(change / 2)
    change -= coinCount * 2
    print(`${coinCount} x 2 stotinki`)
  } else if (change === 1) {
    change--
    print('1 x 1 stotinka')
  }
}
