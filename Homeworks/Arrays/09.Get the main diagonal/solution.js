// let charCode = 97
// let matrix = Array.from({ length: 4 },
//   (v1, k1) => Array.from({ length: 4 },
//     (v2, k2) => String.fromCharCode(charCode++)))

let matrix = []
let charCode = 97

for (let row = 0; row < 4; row++) {
  matrix.push([])
  for (let col = 0; col < 4; col++) {
    matrix[row].push(String.fromCharCode(charCode++))
  }
}


let mainDiagonal = []

for (let i = 0; i < 4; i++) {
  mainDiagonal.push(matrix[i][i])
}

console.log(mainDiagonal)
