// fonction pour afficher la proposition

let choice = "Vide"

function afficherProposition() {
    let inputChoice = document.querySelectorAll('input[name="option"]')
    let propositionArea = document.querySelector('.propositionArea')
    
    for( let i = 0; i < inputChoice.length; i++){
        inputChoice[i].addEventListener('click', function () {
            if(inputChoice[i].checked){
                choice = inputChoice[i].id
            }
            
            if(choice = "mots"){
                    propositionArea.innerHTML = listeMots[0]
                } else {
                    propositionArea.innerHTML = listePhrases[0]
                }

            console.log(choice)
            
        })    
    }
}

afficherProposition()



// fonction pour afficher le résultat

// fonction global du jeu