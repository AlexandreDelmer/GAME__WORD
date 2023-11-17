// Sélectionnez le champs de saisie
zoneProposition.addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    event.preventDefault()
    buttonValider.click()
  }
})

/*
// Fonction pour changer les propriétés des boutons au click
// Sélectionnez tous les boutons par leur classe
const boutons = document.querySelectorAll(".btn")

// Parcourez tous les boutons et ajoutez un gestionnaire d'événement pour chacun d'eux
boutons.forEach(function(bouton) {
  bouton.addEventListener("click", function() {
    // Changer les couleurs du bouton au clic en supprimant pui ajoutant une classe spécifique
    bouton.classList.remove("btn_primaryFontColor", "btn_tertiaryColorBackground")
    bouton.classList.add("btn_animationFontColor", "btn_animationBackgroundColor")
  });
});

// Fonction pour reset les propriétés des boutons au click

// Ajouter un gestionnaire d'événement au click sur la zone de saisie
zoneProposition.addEventListener("click", function() {

// Reset les couleurs du bouton au clic
boutons.forEach(function(bouton) {
    bouton.classList.remove("btn_animationFontColor", "btn_animationBackgroundColor")
    bouton.classList.add("btn_primaryFontColor", "btn_tertiaryColorBackground")

    
})
})
*/