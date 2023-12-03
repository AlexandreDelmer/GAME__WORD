let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')
let popupActive = false
let btnPartager = document.getElementById("btnPartager")


for(let i = 0; i<2; i++){
// Active la popup au click sur le bouton partager
btnPartager.addEventListener('click', () => {
        popup.style.display = "flex"
        overlay.style.display = "flex"
        popupActive = true
        console.log(popupActive)
    }
)

// Désactivation de la popup au click en dehors de celle-ci
if(popupActive){
window.addEventListener('click', function(event){
        if(!popup.contains(event.target)){
            popup.style.display = "none"
            overlay.style.display = "none"
            popupActive = false
            console.log(popupActive)
        }
    }
)   
}
}
