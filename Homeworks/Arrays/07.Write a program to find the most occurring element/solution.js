// functional
// const arr = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2]
// let result = arr.sort((a, b) =>
//   arr.filter(v => v === a).length - arr.filter(v => v === b).length
// ).pop()

const arr = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2]
let result = null
let count = -1

for (let i = 0; i < arr.length - 1; i++) {
  let tempResult = arr[i]
  let tempCount = 1
  for (let j = i + 1; j < arr.length; j++) {
    if (tempResult === arr[j]) {
      tempCount++
    }
  }

  if (tempCount > count) {
    result = tempResult
    count = tempCount
  }
}

console.log(result)
