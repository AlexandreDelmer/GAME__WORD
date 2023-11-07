// fonction pour afficher la proposition

function afficherProposition() {
    let inputChoice = document.querySelectorAll('input[name="option"]')
    let propositionArea = document.querySelector('.propositionArea')
    let totalClass = document.querySelector('.total')
    let choice = "mots"
    
    for( let i = 0; i < inputChoice.length; i++){
        inputChoice[i].addEventListener('click', function () {
            if(inputChoice[i].checked){
                choice = inputChoice[i].id
            }
            
            if(choice === "mots"){
                    propositionArea.innerHTML = listeMots[0]
                } else {
                    propositionArea.innerHTML = listePhrases[0]
                }

            if (choice === "mots"){
                totalClass.innerHTML = listeMots.length
            } else {
                totalClass.innerHTML = listePhrases.length
            }
            
        })    
    }
}


// fonction pour mettre à jour le resultat

function afficherResultat(score) {  
    const scoreDisplay = document.querySelector('.score')
    scoreDisplay.innerHTML = score
}

// fonction global pour lancer le jeu

function lancerJeu() {
    let score = 0

    afficherResultat(score)

    afficherProposition()


}
