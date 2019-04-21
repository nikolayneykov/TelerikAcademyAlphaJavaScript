const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['31', '115']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const tax = 0.2
let bill = 12
let totalMessages = +gets()
let totalMinutes = +gets()

let messagesCount = Math.max(0, totalMessages - 20)
let messagesPrice = messagesCount * 0.06
let minutesCount = Math.max(0, totalMinutes - 60)
let minutesPrice = minutesCount * 0.1

let additionalTaxes = messagesPrice * tax + minutesPrice * tax
bill += messagesPrice + minutesPrice + additionalTaxes

print(
  `${messagesCount} additional messages for ${messagesPrice.toFixed(2)} levas`
)
print(`${minutesCount} additional minutes for ${minutesPrice.toFixed(2)} levas`)
print(`${additionalTaxes.toFixed(2)} additional taxes`)
print(`${bill.toFixed(2)} total bill`)
