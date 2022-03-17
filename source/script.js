var { scoreTotal } = require('../source/bowlingscore')
var { strikeBonusCalculator } = require('../source/bowlingscore')
var { spareBonusCalculator } = require('../source/bowlingscore')

tableau1 = [1,8]
tableau2 = [[1,5],[5,3]]
//for (let i = 0; i < tableau2.length; i++) {
//    console.log(tableau2[i][0] + tableau2[i][1])
//}



// console.log("score total : ", scoreTotal([[10,0], [10,0], [1,2], [0,0],  [0,0], [0,0], [0,0],  [0,0],  [0,0],  [0,0]]))
// console.log("spare amount:", spareBonusCalculator([[5,0],[6,0]]))
console.log("strike amount : ", strikeBonusCalculator([[10,0],[6,3]]))