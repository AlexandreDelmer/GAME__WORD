let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')
let popupActive = false
let btnPartager = document.getElementById("btnPartager")
let btnEnvoyer = document.getElementById("btnEnvoyer")
let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let email = document.getElementById("email")
let inputPopup = document.querySelectorAll('.popup input')
let inputNomValide = document.getElementById("inputNomValide")
let inputPrenomValide = document.getElementById("inputPrenomValide")
let inputEmailValide = document.getElementById("inputEmailValide")
const regex = /^[A-Z][a-z\-]{0,19}$/
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


// Active la popup au click sur le bouton partager
btnPartager.addEventListener('click', () => {
    if(!popupActive){
        popup.style.display = "flex"
        overlay.style.display = "flex"
        popupActive = true
        nom.focus()
    }
})

// Désactivation de la popup au click en dehors de celle-ci
window.addEventListener('click', function(event){
    if(popupActive){
        if(!popup.contains(event.target) && event.target !== btnPartager){
            popup.style.display = "none"
            overlay.style.display = "none"
            popupActive = false
        }
    }
}) 

// Function pour valider un input 
function validateInput(input, regex, id){
    let inputValue = input.value

    if(!regex.test(inputValue)){
        console.log("Validation échouée")

        // Modifier !!! Quand c'est faux on met la classe popup__input__wrong
        id.style.display = "flex"

        return false
    }

    // créer un if si c'est vrai on met la class popup__input__valide

    return true
}

// Modifier pour vérifier au 'change'
nom.addEventListener('blur', () =>{
    validateInput(nom, regex, inputNomValide)
})

prenom.addEventListener('blur', () =>{
    validateInput(prenom, regex, inputPrenomValide)
})

email.addEventListener('blur', () =>{
    validateInput(email, regexEmail, inputEmailValide)
})

btnEnvoyer.addEventListener('click', () => {
    let isNomValide = validateInput(nom, regex)
    let isPrenomValide = validateInput(prenom, regex)
    let isEmailvalide = validateInput(email, regexEmail)

    let emailValue = email.value
    let nomValue = nom.value
    let prenomValue = prenom.value

    let score = document.querySelector('.score').textContent
    let total = document.querySelector('.total').textContent

    if(isNomValide && isPrenomValide && isEmailvalide){
        // Générez l'URL mailto avec l'adresse e-mail
        var mailtoURL = 'mailto:' + encodeURIComponent(emailValue) +
                        '?subject=' + encodeURIComponent('Votre résultat au jeu AzerType') +
                        '&body=' + encodeURIComponent('Bonjour ' + prenomValue + '' + nomValue + ' , vous avez obtenu un score de ' + score +' sur ' + total +'.')

        // Ouvrez la messagerie avec l'adresse e-mail préremplie
        window.location.href = mailtoURL

        nom.value = ""
        prenom.value = ""
        email.value = ""

        popup.style.display = "none"
        overlay.style.display = "none"
        popupActive = false

    } else {
        console.log("Un des inputs contient une erreur")
    }
})

