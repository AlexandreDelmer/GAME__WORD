let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')
let popupActive = false
let btnPartager = document.getElementById("btnPartager")


// Active la popup au click sur le bouton partager
btnPartager.addEventListener('click', () => {
    if(!popupActive){
        popup.style.display = "flex"
        overlay.style.display = "flex"
        popupActive = true
    }
})

// Désactivation de la popup au click en dehors de celle-ci
window.addEventListener('click', function(event){
    let nom = document.getElementById("nom")
    nom.focus()

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

function sendEmail() {
    const regex = /^[A-Z][a-z\-]{0,19}$/

    btnEnvoyer.addEventListener('click', () => {
        let nomValue = document.getElementById("nom").value
        let prenomValue = document.getElementById("prenom").value
        let emailValue = document.getElementById("email").value

        let nom = document.getElementById("nom")
        let prenom = document.getElementById("prenom")
        let email = document.getElementById("email")

        if(!regex.test(nomValue)){
            nom.classList.add('popup__clignotant__animation')

            setTimeout(function (){
                nom.classList.remove('popup__clignotant__animation');
            },  4000)
        }
    })
}

sendEmail ()

