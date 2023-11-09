// Liste des variables utiles dans dans plusieurs fonction

// Fonction pour obtenir la choix de l'utilisateur
function userChoice () {
    let inputMots = document.getElementById("mots")
    let inputPhrases = document.getElementById("phrases")

    if(inputMots.checked){
        choice = inputMots.id
    } else {
        choice = inputPhrases.id
    }

    return choice
}


// fonction pour afficher la proposition
function propositionDisplay (choice) {
    let propositionArea = document.querySelector(".propositionArea")
    
    if(choice === "mots"){
        propositionArea.textContent = listeMots[0]
    } else {
        propositionArea.textContent = listePhrases[0]
    }
}

// fonction pour mettre à jours l'affichage de la proposition
function majPropositionDisplay (choice) {
    let inputChoice = document.getElementById
}

// fonction pour mettre à jour le resultat
function afficherResultat(score) {  
    const scoreDisplay = document.querySelector('.score')
    scoreDisplay.innerHTML = score
}

// fonction global pour lancer le jeu

function lancerJeu() {
    let score = 0
    let choice = userChoice()

    afficherResultat(score)

    propositionDisplay(choice)
    
    console.log(choice)

}

