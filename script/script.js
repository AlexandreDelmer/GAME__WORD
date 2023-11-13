// Liste des variables utiles dans dans plusieurs fonction

// Fonction pour obtenir la choix de l'utilisateur

// function pour changer les valeurs de la zone de proposition en fonction de la valeur checked des input radio

function propositionDisplay(){
    let inputChoice = document.querySelectorAll('input[name="option"')
    let totalScore = document.querySelector('.total')

    for(let i = 0; i < inputChoice.length; i++){
        inputChoice[i].addEventListener('click', () => {
            let userChoice = ""

            if(inputChoice[i].checked){
            userChoice = inputChoice[i].id
        }

            if(userChoice === "mots"){
                propositionArea.textContent = listeMots[0]
                totalScore.textContent = listeMots.length
            } else if(userChoice === "phrases"){
                propositionArea.textContent = listePhrases[0]
                totalScore.textContent = listePhrases.length
            }
            
            return userChoice
        })
    }
}

// fonction pour incrémenter les propositions et le score
function propositionIncrementation(){
    let btnValidation = document.querySelector('.zoneProposition btn')
    console.log(btnValidation)
}

// fonction pour mettre à jour le resultat
function resultDisplay(score) {  
    const scoreDisplay = document.querySelector(".score")
    scoreDisplay.innerHTML = score
}

// fonction global pour lancer le jeu

function lancerJeu() {
    let score = 0
    let propositionArea = document.querySelector('.propositionArea') 

    resultDisplay(score)

    propositionDisplay()
    
    propositionIncrementation()

}

