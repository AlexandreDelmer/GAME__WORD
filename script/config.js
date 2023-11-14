let listeMots = ["Cachalot", "Baleine", "Requin", "Dauphin", "Crevette"]
let listePhrases = ["Poser un lapin", "Bon pied, bon oeil", "Apprendre par coeur", "Avoir un fil à la patte"]

// Affichage initial de la proposition en fonction de l'état checked de base

let inputOption = document.querySelectorAll('Input[name=option')
let propositionArea = document.querySelector('.propositionArea')
let zoneProposition = document.querySelector('input[name="proposition')
let total = document.querySelector('.total')

for (let i = 0 ; i < inputOption.length; i++){
    if(inputOption[i].checked){
        let label = document.querySelector(`label[for="${inputOption[i].id}"]`)  
        let labelValue = label.textContent

        if(labelValue === "Mots"){
            propositionArea.innerHTML = listeMots[0]
            total.innerHTML = listeMots.length
        } else {
            propositionArea.innerHTML = listePhrases[0]
            total.innerHTML = listePhrases.length
        }
    }
}

