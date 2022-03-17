// Exemple d'input : [[10,0],[0,10],[5,4],[3,0],[0,0],[3,2],[6,2],[7,2],[2,2],[4,4]]

function scoreTotal (tableau){   

    if(tableau.length == undefined){
        scoreTotal = tableau
        return scoreTotal
    }   

    let scoreSum = 0
    let spareBonus = false
    let strikeBonus = false
    for (let i = 0; i < tableau.length; i++) {
        if(strikeBonus === true){
            scoreSum = scoreSum + tableau[i][0] + tableau[i][1] 
        }
        if(spareBonus === true){
            scoreSum = scoreSum + tableau[i][0]
        } 
        if(tableau[i][0] + tableau[i][1] === 10 && tableau[i][1] != 0){
            spareBonus = true
        }else{
            spareBonus = false
        }
        if(tableau[i][0] + tableau[i][1] === 10 && tableau[i][1] === 0){
            strikeBonus = true
        }else{
            strikeBonus = false
        }
        scoreSum = scoreSum + tableau[i][0] + tableau[i][1]
    }
    return scoreSum
}
module.exports = {
    scoreTotal
}