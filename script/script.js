// Liste des variables utiles dans dans plusieurs fonction
let choice = ""
let score = 0
let listeProposition = listeMots

// fonction pour afficher la proposition

function afficherProposition() {
    let inputChoice = document.querySelectorAll('input[name="option"]')
    let propositionArea = document.querySelector('.propositionArea')
    let totalClass = document.querySelector('.total')

    for( let i = 0; i < inputChoice.length; i++){
        inputChoice[i].addEventListener('click', function () {
            if(inputChoice[i].checked){
                choice = inputChoice[i].id
            }
            
            if(choice === "mots"){
                    propositionArea.innerHTML = listeMots[0]
                    totalClass.innerHTML = listeMots.length
                } else {
                    propositionArea.innerHTML = listePhrases[0]
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
    let buttonZoneProposition = document.querySelector('.zoneProposition button')

    afficherResultat(score)

    afficherProposition()

// ok mais trouver un moyen de mettre à jour listeProposition et de faire une boucle (voir pour utiliser choice) sinon il faut comprendre comment mettre à jour un variable dans la function afficherProposition
        buttonZoneProposition.addEventListener('click', function () {
            let inputZoneProposition = document.querySelector('input[name="proposition"]')
            
            if(inputZoneProposition.value === propositionArea.textContent){
            score++
            }

            afficherResultat(score)

            inputZoneProposition.value = ""

            console.log(listeProposition)

        })
}

