// fonction pour afficher la proposition

let choice = "vide"

function afficherProposition() {
    let inputChoice = document.querySelectorAll('input[name="option"]')
    let propositionArea = document.querySelector('.propositionArea')
    
    for( let i = 0; i < inputChoice.length; i++){
        inputChoice[i].addEventListener('click', function () {
            if(inputChoice[i].checked){
                let choice = inputChoice[i].id
            }
        })    
    }
}

afficherProposition()

console.log(choice)

// fonction pour afficher le résultat

let score = document.querySelector('.score span')

// fonction global du jeu