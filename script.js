
let objets = [
  { nom: "Chaise", image: "/assets/chaise.png" },
  { nom: "Costume Halloween", image: "/assets/costume-haloween.png" },
  { nom: "Barbecue", image: "/assets/grill.png" },
  { nom: "Guitare", image: "/assets/guitare.png" },
  { nom: "Sac à main", image: "/assets/sac-a-main.png" }
];

let nomElement = document.getElementById("nom-objet");
let imageElement = document.getElementById("image-objet");
let inputPrix = document.getElementById("input-prix");
let btnRandom = document.querySelector(".btn__random");
let btnValider = document.getElementById("btn-valider");
let message = document.getElementById("message");
let btnReset = document.getElementById("btn-reset");

// Variables globales
let prixAleatoire = 0;
let tentativesRestantes = 10;

// Fonction pour sélectionner un objet aléatoire
function choisirObjetAleatoire() {
  let randomIndex = Math.floor(Math.random() * objets.length);
  let randomObjet = objets[randomIndex];

  // Générer un prix aléatoire pour l'objet (entre 1 et 100 €)
  prixAleatoire = Math.floor(Math.random() * 100) + 1;

  // Mise à jour de l'affichage
  nomElement.textContent = randomObjet.nom;
  imageElement.src = randomObjet.image;
  imageElement.alt = randomObjet.nom;

  // Réinitialiser les tentatives et le message
  tentativesRestantes = 10;
  message.textContent = "";
  inputPrix.value = "";

  console.log(`Objet choisi : ${randomObjet.nom}, Prix : ${prixAleatoire}€`);
}

btnRandom.addEventListener("click", choisirObjetAleatoire);

// Ajouter un EventListener pour valider le prix
btnValider.addEventListener("click", function () {
  if (tentativesRestantes > 0) {
    let prixDevine = Number(inputPrix.value);

    if (prixDevine === prixAleatoire) {
      message.textContent = " Félicitations ! Vous avez trouvé le juste prix !";
      message.style.color = "green";
      btnValider.disabled = true; // Désactive le bouton quand le prix est deviné
    } else if (prixDevine < prixAleatoire) {
      message.textContent = "C'est plus !";
      message.style.color = "orange";
    } else {
      message.textContent = "C'est moins !";
      message.style.color = "orange";
    }

    // Réduire les tentatives restantes
    tentativesRestantes--;

    //  afficher un message d'échec si tentatives == 0
    if (tentativesRestantes === 0 && prixDevine !== prixAleatoire) {
      message.textContent = `Perdu ! Le juste prix était ${prixAleatoire}€.`;
      message.style.color = "red";
      btnValider.disabled = true; // Désactiver le bouton après 10 tentatives
    }
  }
});

// réinitialiser le jeu avec un boutpn
btnReset.addEventListener("click", function () {
  choisirObjetAleatoire(); // Relancer un nouvel objet
  btnValider.disabled = false; // Réactiver le bouton de validation
});












