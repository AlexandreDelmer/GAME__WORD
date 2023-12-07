// Variables 
const buttonValider = document.querySelector('.zoneProposition button')
const buttonPartager = document.getElementById('btnPartager')
let inputOption = document.querySelectorAll('Input[name=option')
let propositionArea = document.querySelector('.propositionArea')
let inputMots = document.getElementById('mots')
let inputPhrases = document.getElementById('phrases')
let total = document.querySelector('.total')
let scoreClass = document.querySelector('.score')
let listeProposition = []
let choice = ""
let score = 0

let gameFinish = false

// Afficher la liste proposition en fonction du checked des inputs "option"
function userChoice(){
    if(inputMots.checked){
        choice = inputMots.id
        listeProposition = listeMots
    } else if(inputPhrases.checked){
        choice = inputPhrases.id
        listeProposition = listePhrases
    }
}

// Modifier résultat
function displayScore(){
    if(zoneProposition.textContent === propositionArea){
        score++
    }
    scoreClass.textContent = score
}


// Function pour changer la propositionArea en fonction du checked
function changeProposition(){
    for(let i = 0; i < inputOption.length; i++){
        inputOption[i].addEventListener('click', () => {
            gameFinish = false
            score = 0
            displayScore()
            if(inputOption[i].checked){
                choice = inputOption[i].id
            }

            if(choice === "mots"){
                propositionArea.textContent = listeMots[0]
                total.textContent = listeMots.length
                listeProposition = listeMots
            } else if (choice === "phrases"){
                propositionArea.textContent = listePhrases[0]
                total.textContent = listePhrases.length
                listeProposition = listePhrases
            }
        })
    }
}

// Function pour valider la proposition et augmenter le score si zoneProposition correcte
function validateProposition(){
        buttonValider.addEventListener('click', () => {
            if(zoneProposition.value != ""){
                if(propositionArea.textContent ===  zoneProposition.value){
                    score++
                    displayScore(score)
                    zoneProposition.value = ""
                } else{
                    zoneProposition.value = ""
                }
         
            let positionProposition = listeProposition.indexOf(propositionArea.textContent)

                if(positionProposition < listeProposition.length -1 && !gameFinish ){
                    positionProposition ++
                    propositionArea.textContent = listeProposition[positionProposition]
                } else {
                    gameFinish = true
                    propositionArea.textContent = "Le jeu est terminé"
                }
            }
        })    
}

// Function global pour lancer le jeu
function lancerJeu(){

    displayScore()

    userChoice()

    if(choice === "mots"){
        propositionArea.textContent = listeMots[0]
        total.textContent = listeMots.length
        listeProposition = listeMots
    } else if (choice === "phrases"){
        propositionArea.textContent = listePhrases[0]
        total.textContent = listePhrases.length
        listeProposition = listePhrases
    }

    validateProposition()

    changeProposition()
}