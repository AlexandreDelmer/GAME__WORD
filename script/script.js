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
            if(propositionArea.textContent ===  zoneProposition.value){
                score++
                displayScore(score)
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



/*
// Faire en sorte que la valeur par défaut de listeProposition soit en fonction de la valeur checked des input

function valueListeProposition(){
    let inputMots = document.getElementById('mots')
    let inputPhrases = document.getElementById('phrases')

    if(inputMots.checked){
        listeProposition = listeMots
    } else if (inputPhrases.checked){
        listeProposition = listePhrases
    }
}


// Fonction pour obtenir la choix de l'utilisateur

// function pour changer les valeurs de la zone de proposition en fonction de la valeur checked des input radio

function propositionDisplay(score){
    let inputChoice = document.querySelectorAll('input[name="option"')
    let totalScore = document.querySelector('.total')

    for(let i = 0; i < inputChoice.length; i++){
        inputChoice[i].addEventListener('click', () => {
            score = 0
            let userChoice = ""

            if(inputChoice[i].checked){
                userChoice = inputChoice[i].id
            }

            if(userChoice === "mots"){
                propositionArea.textContent = listeMots[0]
                totalScore.textContent = listeMots.length
                listeProposition = listeMots
            } else if(userChoice === "phrases"){
                propositionArea.textContent = listePhrases[0]
                totalScore.textContent = listePhrases.length
                listeProposition = listePhrases
            }

            resultDisplay(score)
        })
    }
}

// fonction pour incrémenter les propositions et le score
function propositionIncrementation(score){
    let btnValidation = document.getElementById('btnProposition')
    score = 0

    btnValidation.addEventListener('click', () =>{
        let zonePropositionValue = zoneProposition.value

        // Si la valeur de propositionArea et zoneProposition est identique alors on augmente le score sinon rien de se passe
        if(propositionArea.textContent === zonePropositionValue){ 
            score++
        }

        // On efface le texte de la balise zoneProposition
        zoneProposition.value = ""

        // On met à jour le score
                
        resultDisplay(score)

        // On intègre la valeur suivante du tableau concerné dans propositionArea

        propositionArea.textContent = listeProposition[score]

    })
}

// fonction pour mettre à jour le resultat
function resultDisplay(score) {  
    const scoreDisplay = document.querySelector(".score")
    scoreDisplay.innerHTML = score
}

// fonction global pour lancer le jeu

function lancerJeu() {

    valueListeProposition()

    resultDisplay(score)

    propositionDisplay()
    
    propositionIncrementation(score)

}
*/
