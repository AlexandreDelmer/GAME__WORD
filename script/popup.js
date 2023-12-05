let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')
let popupActive = false
let btnPartager = document.getElementById("btnPartager")
let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let email = document.getElementById("email")


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

// Function pour ouvrir la messagerie avec un email prérempli au click sur le bouton Envoyer
let btnEnvoyer = document.getElementById("btnEnvoyer")

const regex = /^[A-Z][a-z\-]{0,19}$/
let prenomValue = prenom.value
let emailValue = email.value

nom.addEventListener('focusout', 'keydown', () =>{
    let nomValue = nom.value
    if(!regex.test(nomValue)){
        nom.classList.add('popup__clignotant__animation')

        setTimeout(function (){
            nom.classList.remove('popup__clignotant__animation');
        },  4000)
    } 
})


