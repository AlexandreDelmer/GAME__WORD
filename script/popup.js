let popup = document.querySelector('.popup')
let overlay = document.querySelector('.overlay')


// Problème : rien ne se passe au click 
popup.addEventListener('click', function(event){
    console.log("1")
    if(!popup.contains(event.target)){
        popup.style.display = "none"
        overlay.style.display = "none"
    }
    }
)

