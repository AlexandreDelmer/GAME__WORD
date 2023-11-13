// Liste des variables utiles dans dans plusieurs fonction

// Fonction pour obtenir la choix de l'utilisateur

// function pour changer les valeurs de la zone de proposition en fonction de la valeur checked des input radio

function propositionDisplay(){
    let inputChoice = document.querySelectorAll('input[name="option"')
    let propositionArea = document.querySelector('.propositionArea')
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

// fonction pour mettre à jours l'affichage de la proposition

// fonction pour mettre à jour le resultat
function resultDisplay(score) {  
    const scoreDisplay = document.querySelector(".score")
    scoreDisplay.innerHTML = score
}

// fonction global pour lancer le jeu

function lancerJeu() {
    let score = 0
    let userChoice

    resultDisplay(score)

    propositionDisplay()
    
    console.log(userChoice)

}

