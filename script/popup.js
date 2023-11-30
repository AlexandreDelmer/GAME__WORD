let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')


// Problème : rien ne se passe au click 
window.addEventListener('click', function(event){
    if(!popup.contains(event.target)){
        popup.style.display = "none"
        overlay.style.display = "none"
    }
    }
)

