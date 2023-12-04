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
    btnEnvoyer.addEventListener('click', () => {
        let nom = document.getElementById("nom").value
        let prenom = document.getElementById("prenom").value
        let email = document.getElementById("email").value
        
        console.log(nom, prenom, email)
    })
}

sendEmail ()

// Function pour valider les input
function validateInput() {
        const regex = /^[A-Z][a-z\-]{0,19}$/
        let nom = document.getElementById("nom").value

        if(!regex.test(nom)){
                
        }
}


