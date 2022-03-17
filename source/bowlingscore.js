// Exemple d'input : [[10,0],[0,10],[5,4],[3,0],[0,0],[3,2],[6,2],[7,2],[2,2],[4,4]]

let strikeBonusAmount = 10
function strikeBonusCalculator(twoNextTurns) {
    // l'arguement est un tableau composé des scores des deux tours suivants [[x, y]], [z, v]]
    // si le premier tour suivant est un strike
    if(twoNextTurns[0][0] === 10){
        // si le deuxieme tour suivant est également un strike
        if(twoNextTurns[1][1] === 10){
            strikeBonusAmount = strikeBonusAmount + 10 + 10
        }else{
            strikeBonusAmount = strikeBonusAmount + 10 + twoNextTurns[1][0]
        }
    }else{
        // si les deux tours suivants ne contiennent pas de strike
        for (let i = 0; i < twoNextTurns.length; i++) {
            strikeBonusAmount = strikeBonusAmount + twoNextTurns[i][0] + twoNextTurns[i][1]
        }    
    }
    return strikeBonusAmount
}

function spareBonusCalculator(currentAndNextTurn) {
    // l'arguement est un tableau composé des scores du tour courant, ainsi que du suivant]
    spareBonusAmount = currentAndNextTurn[0][0] + currentAndNextTurn[0][1] + currentAndNextTurn[1][0]
    return spareBonusAmount
}


function scoreTotal (tableau){   

    if(tableau.length == undefined){
        scoreTotal = tableau
        return scoreTotal
    }   

    let scoreSum = 0
    let isaSpare = false 
    let isaStrike = false
    let spareBonus = []
    let strikeBonus = []


    for (let i = 0; i < tableau.length; i++) {
        // si le tour précédent était un strike
        if(isaStrike === true){
            // et que le tour courant est aussi un strike
            if(tableau[i][0] === 10 && tableau[i][1]){
                // on n'ajoute que le premier élément de notre tour (car le 2e est fake)
                strikeBonus = strikeBonusCalculator([[tableau[i+1],tableau[i+2]]])
                scoreSum = strikeBonus
            }else{
                strikeBonus = strikeBonusCalculator([[tableau[i],tableau[i+1]]])
                scoreSum = strikeBonus
                console.log(strikeBonus)
            }
        }
        if(isaSpare === true){
            scoreSum = scoreSum + tableau[i][0]
        } 
        if(tableau[i][0] + tableau[i][1] === 10 && tableau[i][1] != 0){
            isaSpare = true
        }else{
            isaSpare = false
        }
        // si le tour courant est un strike
        if(tableau[i][0] + tableau[i][1] === 10 && tableau[i][1] === 0){
            // on active le strike bonus pour le tour suivant
            isaStrike = true
        }else{
            isaStrike = false
        }
        if(tableau[i].length === 3){
            scoreSum = scoreSum + tableau[i][0] + tableau[i][1] + tableau[i][2]
        }else{
            scoreSum = scoreSum + tableau[i][0] + tableau[i][1]
        }
        //console.log("is a spare ?", isaSpare)
        //console.log("is a strike ?", isaStrike)
    }
    return scoreSum
}
module.exports = {
    scoreTotal,
    strikeBonusCalculator,
    spareBonusCalculator
}